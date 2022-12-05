import {
    argv
} from 'node:process';

const parseArgs = () => {
    let parsedData = []
    argv.forEach(arg => {
        parsedData.push(arg)
        if (parsedData.length === 2) {
            console.log(`${parsedData[0].toString().slice(2)} is ${parsedData[1]}`)
            parsedData = []
        }
    })
};

parseArgs();