import {
    dirname
} from 'node:path';
import {
    readFile
} from 'fs/promises';
const {
    createHash,
} = await import('node:crypto');

const calculateHash = async () => {
    const data = await readFile(`${dirname('calcHash.js')}/files/fileToCalculateHashFor.txt`);
    var hashForLog = createHash('sha256').update(data).digest("hex");
    console.log(hashForLog);
};

await calculateHash();