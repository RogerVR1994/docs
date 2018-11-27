'use strict'

const fs = require('fs');

const a = {
	a: 'hola'
}

function read() {
	return new Promise(function(resolve, reject) {
		fs.readFile('./file.html', function(err, data) {
			if(err) {
				reject(new Error(err));
				return;
			}
			resolve(JSON.parse(data));
		});
	});
}


fs.writeFile("./file.html", 'hola', function(err) {
	if(err) {
		console.log(err);
	}
	console.log(a);
});