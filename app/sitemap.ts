import type { MetadataRoute } from "next";
import { publicRoutes } from "@/lib/site-data";

const baseUrl = "https://mobidigital.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes
    .filter((route) => route !== "/admin")
    .map((route) => ({
      url: `${baseUrl}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.7,
    }));
}
