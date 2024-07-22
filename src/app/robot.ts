import { SiteURL } from "@/lib/metadata";
import { MetadataRoute } from "next";


export default function robot(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${SiteURL}/sitemap.xml`,
    }
}