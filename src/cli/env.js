import { env } from 'node:process';

env.RSS_name1 = 'value1';
env.RSS_name2 = 'value2';

const parseEnv = () => {
    Object.keys(env).forEach(k => {
        if (k.includes('RSS_')) {
            console.log(`${k}=${env[k]}`)
        }
    })
};

parseEnv();