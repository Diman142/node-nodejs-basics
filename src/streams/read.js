import {
    createReadStream
} from 'node:fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const stream = createReadStream(`${__dirname}/files/fileToRead.txt`);

    stream.on('data', (chunk) => {
        stdout.write(chunk.toString())
    })
};

await read();