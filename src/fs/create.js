import { open, appendFile } from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const errMess = 'FS operation failed'

const create = async () => {
    try {
        await open(`${__dirname}/files/fresh.txt`, 'r',)
        throw new Error(errMess)
    } catch (err) {
        await appendFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young');
        if (err.message === errMess) {
            console.error(err.message)
        }

    }

};

await create();