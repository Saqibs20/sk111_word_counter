#! usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your paragraph and to count the words:",
        type: "input",
        name: "Sentence",
    },
]);
const word = answer.Sentence.trim().split(" ");
console.log(word);
console.log(`The total word are ${word.length}`);
console.log("The End");
