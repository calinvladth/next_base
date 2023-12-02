import {NextApiRequest, NextApiResponse} from "next";
import * as fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const pagesDirectory = path.join(process.cwd(), 'src/pages');
    const pages = await getPages(pagesDirectory);
    res.status(200).json(pages)
}

// TODO: Probably move this somewhere else
const EXCLUDES_PAGES = ['_app']

async function getPages(pagesDirectory: string, baseRoute=''): Promise<string[]> {
    const entries = await fs.promises.readdir(pagesDirectory, { withFileTypes: true });
    const validExtensions = ['.tsx'];
    let pages: string[] = [];

    for (const entry of entries) {
        const entryPath = path.join(pagesDirectory, entry.name);

        if (entry.isDirectory()) {
            const subdirectoryPages = await getPages(entryPath, `${baseRoute}/${entry.name}`);
            pages = [...pages, ...subdirectoryPages];
        } else if (validExtensions.some(ext => entry.name.endsWith(ext))) {
            const fileName = entry.name.replace(/\.[^/.]+$/, '').replace('index', '')
            if (!EXCLUDES_PAGES.includes(fileName)) {
                pages.push(`${baseRoute}/${fileName}`);
            }
        }
    }

    return pages;
}