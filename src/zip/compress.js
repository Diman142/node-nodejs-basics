import {
    createGzip
} from 'node:zlib';
import {
    pipeline
} from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import {
    fileURLToPath
} from 'node:url';
import {
    dirname
} from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gzip = createGzip();
const source = createReadStream(`${__dirname}/files/fileToCompress.txt`);
const destination = createWriteStream(`${__dirname}/files/archive.gz`);

const compress = async () => {
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    });
};

await compress();