import {
    mkdir,
    readdir
} from 'node:fs/promises';
import {
    readFileSync,
    writeFileSync
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {

    try {
        const fileNames = await readdir(`${__dirname}/files`);
        if (fileNames.length === 0) {
            throw new Error('FS operation failed')
        }

        await mkdir(`${__dirname}/files_copy`);

        fileNames.forEach(name => {
            const data = readFileSync(`${__dirname}/files/${name}`, {
                encoding: 'utf-8'
            })
            writeFileSync(`${__dirname}/files_copy/${name}`, data)
        })

    } catch (err) {
        throw new Error(err.message)
    }
};

copy();