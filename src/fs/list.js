import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const list = async () => {
    try {
        const files = await readdir(`${__dirname}/files`);
        for (const file of files)
            console.log(file);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await list();