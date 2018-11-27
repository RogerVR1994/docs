const request = require("request");
const prompt = require('prompt-sync')();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


for(let i = 0;i < 5; i++){
    let k = i;
    setTimeout(function(){
        console.log('count ', k);
    }, 3000 * (k + 1));
}