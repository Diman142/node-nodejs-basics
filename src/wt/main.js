import { cpus } from 'os'
import {
    Worker
} from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const cpu = cpus()

    const workerArr = cpu.map((_c, ind) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(`${__dirname}/worker.js`, {
                workerData: ind + 10
            })

            worker.on('message', resolve)
            worker.on('error', reject)
        })
    })

    try {
        const response = await Promise.allSettled(workerArr)
        const result = response.map(res => {
            return {
                status: res.status === 'fulfilled' ? 'resolved' : 'error',
                data: res.status === 'fulfilled' ? res.value : null
            }
        })
        console.log(result)
    } catch (e) {
        throw new Error(e.message)
    }
};

await performCalculations();