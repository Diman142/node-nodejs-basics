import { open, appendFile } from 'fs/promises';

const errMess = 'FS operation failed'

const create = async () => {
    try {
        await open('./files/fresh.txt', 'r',)
        throw new Error(errMess)
    } catch (err) {
        await appendFile('./files/fresh.txt', 'I am fresh and young');
        if (err.message === errMess) {
            console.error(err.message)
        }

    }

};

await create();