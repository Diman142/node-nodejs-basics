import { readFile } from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const errMessage = 'FS operation failed'

const read = async () => {
    try {
        const contents = await readFile(`${__dirname}/files/fileToRead.txt`, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error(errMessage)
    }
};

await read();