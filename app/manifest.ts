import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MW Group",
    short_name: "MW Group",
    description:
      "MW Group is a family owned New Zealand group of businesses built around one simple idea, doing things properly.",
    start_url: "/",
    display: "standalone",
    background_color: "#e9e6e0",
    theme_color: "#243029",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
