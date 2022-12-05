import { stdin } from 'node:process';
import {
    createWriteStream
} from 'node:fs';
import {
    dirname
} from 'node:path';

const write = async () => {
    stdin.setEncoding('utf8')
    const stream = createWriteStream(`${dirname('read.js')}/files/fileToWrite.txt`);

    stdin.on('data', function (chunk) {
        stream.write(chunk)
    })
};

await write();