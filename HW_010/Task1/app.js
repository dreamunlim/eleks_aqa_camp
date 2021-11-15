import randomstring from "randomstring";
import fs from "fs";

function Student() {
    let parsedJson = null;

    const fileName = "data.txt";
    const fileEncoding = "utf8";

    const strLength = 15;
    const name = randomstring.generate({ length: strLength, charset: 'alphabetic' });
    const surname = randomstring.generate({ length: strLength, charset: 'alphabetic' });
    const rate = random(1, 100);

    function random(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }

    function writeToFile() { // rewrites existing file
        let json = JSON.stringify(this, null, " "); // (value, replacer, indent)
        fs.writeFile(fileName, json, (err) => {
            if (err) {
                throw err;
            }
            console.log("File saved.");

            readFile();
        });
    }

    function readFile() {
        fs.readFile(fileName, fileEncoding, (err, fileContents) => {
            if (err) {
                throw err;
            }
            console.log("File read.");

            parseFile(fileContents);
            updateObject();
            appendToFile();
        });
    }

    function parseFile(fileContents) { // str to obj
        parsedJson = JSON.parse(fileContents);
        console.log("File parsed: ", parsedJson);
    }

    function updateObject() {
        parsedJson.jobTitle = randomstring.generate({ length: strLength, charset: 'alphabetic' });
        parsedJson.residenceCountry = randomstring.generate({ length: strLength, charset: 'alphabetic' });
    }

    function appendToFile() {
        let json = JSON.stringify(parsedJson, null, " "); // (value, replacer, indent)
        fs.appendFile(fileName, "\n" + json, fileEncoding, (err) => {
            if (err) {
                throw err;
            }
            console.log("Data appended to file: ", parsedJson);
        });
    }

    return {
        name: name,
        surname: surname,
        rate: rate,
        writeToFile: writeToFile
    }
}

const student = new Student();
student.writeToFile();