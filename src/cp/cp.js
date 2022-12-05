import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {

    const child = spawn('node', [`${__dirname}/files/script.js`, ...args])


    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)
};

spawnChildProcess(['test']);