/**
 * THE ONE FILE THAT DIFFERS PER LANDING.
 *
 * Everything else in this repo is shared with the other aiNOW product landings and is kept in
 * sync from `landing-template/` by `python scripts/landings.py sync`.
 */

export const SITE = {
  /** Machine key. Lands on <html data-product> and is the deploy smoke-test hook. */
  key: "aibrain",

  domain: "aibrain.ge",
  baseUrl: "https://aibrain.ge",

  /** Rendered as <prefix><mark> by the nav, hero, footer and wordmark band. */
  wordmark: { prefix: "ai", mark: "BRAIN" },

  /** The product colour. src/app/brand.css is generated from this; keep them in step. */
  brandHex: "#6366f1",

  /** Three hexes the hero grainient shader interpolates: soft, brand, accent. */
  shader: ["#e0e7ff", "#6366f1", "#4338ca"] as [string, string, string],

  /**
   * i18n.
   */
  defaultLocale: "ka",
  locales: ["ka", "en", "ru"],

  /** PWA manifest. Not locale-aware (Next metadata routes are build-time). English. */
  manifest: {
    name: "aiBRAIN",
    short: "aiBRAIN",
    description: "Single source of verified business knowledge for connected AI assistants across all customer channels.",
    background: "#fbfcfc",
    theme: "#6366f1",
  },

  /**
   * The machine-readable half of the page.
   */
  seo: {
    disambiguating:
      "A central business knowledge base and control layer for Georgian companies that stores approved company rules, FAQs, prices, catalogs, and schedules for connected AI assistants. It is not an individual customer messenger, it is not a phone runtime, and it does not replace the iAI management interface.",
    serviceType: "Single Source of Truth Business Knowledge Base & AI Control Layer",
    audienceName:
      "Small and medium business owners, customer service directors, and sales team leaders in Georgia",
    areaServed: "GE",
    knowsAbout: [
      "Single source of truth for business",
      "Company AI knowledge base",
      "FAQ and internal policy management",
      "Structured product catalog RAG",
      "Omnichannel AI consistency",
      "Lead capture and Telegram alerts",
      "Google Calendar appointment booking",
      "Hallucination guard and human escalation",
      "Multi-channel AI synchronization",
    ],
    features: [
      "Central business knowledge repository storing verified identity, FAQs, policies, and pricing",
      "Single rule update automatically propagated to all connected AI assistants",
      "Structured catalog indexing with retrieval-augmented generation (RAG)",
      "Automatic hallucination prevention with fallback and human escalation",
      "Google Calendar integration for appointment scheduling with working hours enforcement",
      "Lead capture and instant Telegram channel notifications",
    ],
    boundary:
      "aiBRAIN stores verified business knowledge and rules. Managing tasks via plain-language instructions belongs to iAI.ge. External sales chat handling belongs to aiSTAFF.ge, automated telephone calls to aiCALL.ge, and web applications to aiAPP.ge.",
    limits: [
      "aiBRAIN is not a telephone voice runtime; phone calls belong to aiCALL.ge.",
      "aiBRAIN does not guarantee 100% autonomous resolution for unknown facts; missing questions are escalated to human staff.",
      "Catalog and indexing capacities scale according to the selected plan from the unified pricing source.",
      "Channel integrations are activated once respective credentials and platform permissions are granted.",
      "aiBRAIN stores approved business data and does not invent unverified facts.",
    ],
    commitment:
      "Before launch, aiNOW structures the company's knowledge base, configures FAQs, catalog, and rules, connects supported channels, and tests verification and escalation safeguards.",
    summary:
      "aiBRAIN is the central business knowledge base and control layer for connected AI assistants in Georgia. It unifies company identity, policies, prices, product catalogs, and schedules so AI assistants across Messenger, Instagram, WhatsApp, Telegram, and websites deliver approved answers without hallucination.",
  },
} as const;

export type SiteConfig = typeof SITE;
