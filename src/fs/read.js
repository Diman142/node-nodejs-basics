import { readFile } from 'fs/promises';

const errMessage = 'FS operation failed'

const read = async () => {
    try {
        const contents = await readFile('./files/fileToRead.txt', { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error(errMessage)
    }
};

await read();