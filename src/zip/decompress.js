import {
    dirname
} from 'node:path';
import {
    pipeline
} from 'node:stream';
import {
    fileURLToPath
} from 'node:url';
import {
    createGunzip
} from 'node:zlib';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const source = createReadStream(`${__dirname}/files/archive.gz`);
const destination = createWriteStream(`${__dirname}/files/fileToCompress.txt`);
const unzip = createGunzip();

const decompress = async () => {
    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        }
    }
    )
};

await decompress();