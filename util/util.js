import fs from 'fs/promises';

export const readFile = async (fileName) => {
    try {
        const data = await fs.readFile(fileName, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log(err);
    }
};