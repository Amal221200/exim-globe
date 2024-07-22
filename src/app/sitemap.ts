import { SiteURL } from "@/lib/metadata";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: SiteURL,
            lastModified: new Date()
        },
        {
            url: `${SiteURL}/about`,
            lastModified: new Date()
        },
        {
            url: `${SiteURL}/contact-us`,
            lastModified: new Date()
        },
        {
            url: `${SiteURL}/products`,
            lastModified: new Date()
        },
        {
            url: `${SiteURL}/sourcing-agent`,
            lastModified: new Date()
        },
    ]
}