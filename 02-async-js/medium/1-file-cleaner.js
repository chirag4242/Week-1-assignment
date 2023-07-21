const fs = require('fs');

function asyncReadFile(path) {
    console.log("Start reading file...");
    return new Promise((resolve, rejects) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                rejects(err);
            }
            else {
                resolve(data);
            }
        })
    });
}

function cleanContent(data) {
    console.log("Start cleaning the data...");

    return new Promise((resolve, reject) => {
        data = data.replace(/\s+/g, ' ').trim();
        resolve(data);
    });
}

function asyncWriteFile(writeFilePath, content) {
    console.log("start writing in file...")
    return new Promise((resolve, reject) => {
        fs.writeFile(writeFilePath, content, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        })
    });
}

const filename = './readThisFile.txt';

asyncReadFile(filename).then((data) => {
    console.log("Successfully read the file");
    console.log(`current data: ${data}`);
    return cleanContent(data);
}).then((data) => {
    console.log(`cleaned data: ${data}`);
    asyncWriteFile(filename, data);
}).then(() => {
    console.log("Successfully wrote in the file");
    console.log("All task done");
}).catch((err) => {
    console.log(`Error: ${err}`);
});