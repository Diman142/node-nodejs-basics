import { rename as changeName } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const from = `${__dirname}/files/wrongFilename.txt`;
const to = `${__dirname}/files/properFilename.md`;

const rename = async () => {
    try {
        await changeName(from, to);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await rename();