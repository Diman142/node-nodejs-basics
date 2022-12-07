import {
    readFile
} from 'fs/promises';
const {
    createHash,
} = await import('node:crypto');
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const data = await readFile(`${__dirname}/files/fileToCalculateHashFor.txt`);
    var hashForLog = createHash('sha256').update(data).digest("hex");
    console.log(hashForLog);
};

await calculateHash();