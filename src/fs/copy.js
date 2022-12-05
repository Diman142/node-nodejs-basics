import {
    mkdir,
    readdir
} from 'node:fs/promises';
import {
    readFileSync,
    writeFileSync
} from 'node:fs';
import {
    dirname
} from 'node:path';

const copy = async () => {
    const path = `${dirname('copy.js')}`
    try {
        const fileNames = await readdir('./files');
        if (fileNames.length === 0) {
            throw new Error('FS operation failed')
        }

        await mkdir('files_copy');

        fileNames.forEach(name => {
            const data = readFileSync(`${path}/files/${name}`, {
                encoding: 'utf-8'
            })
            writeFileSync(`${path}/files_copy/${name}`, data)
        })

    } catch (err) {
        throw new Error('FS operation failed')
    }
};

copy();