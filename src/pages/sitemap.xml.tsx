import {NextPageContext} from "next";

function generateSiteMap({pages}: { pages: string[] }) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     ${
        pages.map(page =>
            `<url>
                <loc>${process.env.NEXT_PUBLIC_URL}${page}</loc>
            </url>`)
     }
   </urlset>
 `;
}

export async function getServerSideProps(context: NextPageContext) {
    // Generate the XML sitemap with the blog data
    const pagesResponse = await fetch('http://localhost:3000/api/get-all-pages')
    const pages = await pagesResponse.json()

    const sitemap = generateSiteMap({pages});


    context?.res?.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    context?.res?.write(sitemap);
    context?.res?.end();

    return {
        props: {},
    };
}

export default function SiteMap() {
}