import {
    createReadStream
} from 'node:fs';
import {
    dirname
} from 'node:path';
import { stdout } from 'node:process';

const read = async () => {
    const stream = createReadStream(`${dirname('read.js')}/files/fileToRead.txt`);

    stream.on('data', (chunk) => {
        stdout.write(chunk.toString())
    })
};

await read();