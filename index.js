import {Padlock} from "./Padlock";

const prompt = require('prompt-sync')({sigint: true});
let exiting = false;

console.log("Enter: `e` to exit")

while (! exiting) {
    let cipher = prompt('Enter cipher: ');
    if (cipher === "e") {
        console.log('Exiting...');
        exiting = true;
    } else {
        console.log("Code: " + "'" + new Padlock(cipher).decrypt() + "'" + '\n');
    }
}