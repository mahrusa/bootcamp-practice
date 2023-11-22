const franc = require("franc");
const langs = require("langs");

let phrase = "";

for(let i=2; i<process.argv.length; i++){
    phrase = phrase + process.argv[i]+ " " ;
}

const code = franc(phrase);

console.log(langs.where("3",code).name);

