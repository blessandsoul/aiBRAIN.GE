import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "aiBRAIN",
    short_name: "aiBRAIN",
    description: "Approved business knowledge for connected AI assistants.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfcfc",
    theme_color: "#6366f1",
    icons: [
      { src: "/icon.svg?v=17-20260811", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
