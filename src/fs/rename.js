import { rename as changeName } from 'node:fs/promises';

const from = './files/wrongFilename.txt';
const to = './files/properFilename.md';

const rename = async () => {
    try {
        await changeName(from, to);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

await rename();