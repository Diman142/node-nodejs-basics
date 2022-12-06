import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const remove = async () => {
    try {
        await unlink(`${__dirname}/files/fileToRemove.txt`);
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();