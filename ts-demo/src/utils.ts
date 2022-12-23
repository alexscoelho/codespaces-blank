const fs = require('fs/promises');
const path = require('path');

export async function appendToFile(content:string, file:string) {
    try {
        const todo = "\n" + content;
        const filePath = path.resolve(file); 
        await fs.appendFile(filePath, todo);
    } catch (err) {
        console.log(err);
    }
}

export async function readFromFile(file:string) {
    const filePath = path.resolve(file); 
    try {
        const data = await fs.readFile(filePath, { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log(err);
    }
}