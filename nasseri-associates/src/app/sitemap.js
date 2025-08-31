export default async function sitemap() {
  const site = process.env.SITE_URL || "https://example.com";
  const routes = ["", "/about", "/clinicians", "/blog", "/forms", "/contact"];
  return routes.map((route) => ({ url: `${site}${route}`, changeFrequency: "weekly", priority: route === "" ? 1.0 : 0.7 }));
}

