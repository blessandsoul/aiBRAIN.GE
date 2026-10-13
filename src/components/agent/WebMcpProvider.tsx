"use client";

// WebMCP provider (webmachinelearning.github.io/webmcp). Feature-detected: where the browser
// exposes `navigator.modelContext`, aiBRAIN exposes a product-specific service search and the
// existing guarded callback tool an in-page agent can call.
// Both hit same-origin endpoints only (CSP connect-src 'self'). Renders nothing; on a browser
// without WebMCP it is a no-op. The search copy follows aiBRAIN's public product facts.

import { useEffect } from "react";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";

interface WebMcpToolResult {
  content: Array<{ type: "text"; text: string }>;
}

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<WebMcpToolResult>;
}

interface ModelContext {
  provideContext?: (context: { tools: WebMcpTool[] }) => void;
  registerTool?: (tool: WebMcpTool) => void;
}

const text = (value: string): WebMcpToolResult => ({ content: [{ type: "text", text: value }] });

interface ServiceEntry {
  id: string;
  name: string;
  url: string;
  summary?: string;
  deliverables?: string[];
}

const normalizeServiceFeed = (value: unknown): ServiceEntry[] => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return [];
  const feed = value as { services?: unknown; name?: unknown; url?: unknown; description?: unknown; serviceType?: unknown; purpose?: unknown };
  if (Array.isArray(feed.services)) return feed.services as ServiceEntry[];
  const name = typeof feed.name === "string" ? feed.name.trim() : "";
  const url = typeof feed.url === "string" ? feed.url.trim() : "";
  const summary = [feed.description, feed.serviceType, feed.purpose].find(
    (candidate): candidate is string => typeof candidate === "string" && candidate.trim().length > 0,
  )?.trim() ?? "";
  if (!name || !url || !summary) return [];
  return [{ id: url, name, url, summary }];
};

const TOOLS: WebMcpTool[] = [
  {
    name: "search_services",
    description:
      "Search aiBRAIN's public service feed for an approved business knowledge and control layer for connected AI assistants. Returns matching services with a summary and a link.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keywords, e.g. 'knowledge', 'control layer', 'connected AI assistants'. Empty returns all." },
      },
    },
    async execute(args): Promise<WebMcpToolResult> {
      const query = typeof args.query === "string" ? args.query.toLowerCase().trim() : "";
      const res = await fetch("/ai/service.json", { headers: { accept: "application/json" } });
      if (!res.ok) return text("Could not load the aiBRAIN service feed right now.");
      const data = (await res.json()) as unknown;
      const all = normalizeServiceFeed(data);
      const matches = query
        ? all.filter((s) =>
            `${s.name} ${s.summary ?? ""} ${(s.deliverables ?? []).join(" ")}`.toLowerCase().includes(query),
          )
        : all;
      const out = matches.map((s) => ({ name: s.name, url: s.url, summary: s.summary ?? "" }));
      return text(JSON.stringify(out.length ? out : { message: "No matching aiBRAIN service. See https://aibrain.ge" }));
    },
  },
  {
    name: "request_quote",
    description:
      "Submit a lead to aiBRAIN to discuss an approved knowledge and control layer for connected AI assistants. Unknown or risky questions follow the agreed human-escalation boundary; scope and price are approved before work. Only a phone number is required.",
    inputSchema: {
      type: "object",
      required: ["phone"],
      properties: {
        phone: { type: "string", description: "Contact phone number (required)" },
        name: { type: "string" },
        projectType: { type: "string", enum: ["website", "ai", "automation", "creative", "other"] },
        message: { type: "string", description: "What you need" },
      },
    },
    async execute(args): Promise<WebMcpToolResult> {
      if (isLandingCloneClientPreview()) return text("Callback requests are disabled in this preview.");
      return text("Browser-agent requests do not submit data. Please use the visible aiBRAIN contact form to complete the security check.");
    },
  },
];

export function WebMcpProvider(): null {
  useEffect(() => {
    const nav = navigator as Navigator & { modelContext?: ModelContext };
    const mc = nav.modelContext;
    if (!mc) return;
    const tools = isLandingCloneClientPreview()
      ? TOOLS.filter((tool) => tool.name === "search_services")
      : TOOLS;
    try {
      if (typeof mc.provideContext === "function") {
        mc.provideContext({ tools });
      } else if (typeof mc.registerTool === "function") {
        for (const tool of tools) mc.registerTool(tool);
      }
    } catch {
      // WebMCP is an emerging API; never let registration break the page.
    }
  }, []);

  return null;
}
