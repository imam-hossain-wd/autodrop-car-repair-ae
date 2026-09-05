import { SiteConfig } from "@/config/siteConfig";


export default async function sitemap(){
  const baseUrl = SiteConfig?.url || "https://autodropcarrepair.ae";
  const currentDate = new Date().toISOString();

 
  const staticPages = [
    "", // Home page
    "/services",
    "/service-area",
    "/about",
    "/contact",
    "/projects",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));


  const servicePages = (SiteConfig?.services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));


//   const areaPages = (SiteConfig?.serviceAreas || []).map((area) => {
//     const slug = area.name
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)+/g, "");

//     return {
//       url: `${baseUrl}/area-we-serve/${slug}`,
//       lastModified: currentDate,
//       changeFrequency: "weekly",
//       priority: 0.8,
//     };
//   });



  // সব ইউআরএল একসাথে মার্চ (Combine) করা
  return [...staticPages, ...servicePages];
}