import { stdin, stdout } from 'node:process'
import { Transform, pipeline } from 'node:stream';

const readable = stdin
const writable = stdout

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        try {
            const resultString = `${chunk.toString().trim().split('').reverse().join('')}`;
            callback(null, resultString + '\n');
        } catch (err) {
            callback(err);
        }
    },
});


const transform = async () => {
    pipeline(
        readable,
        myTransform,
        writable,
        err => {
            console.log(err)
        }
    )
};

await transform();