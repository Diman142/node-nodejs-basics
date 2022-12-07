import { stdin } from 'node:process';
import {
    createWriteStream
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    stdin.setEncoding('utf8')
    const stream = createWriteStream(`${__dirname}/files/fileToWrite.txt`);

    stdin.on('data', function (chunk) {
        stream.write(chunk)
    })
};

await write();