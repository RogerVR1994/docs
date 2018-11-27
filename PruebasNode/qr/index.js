'use strict'

const request = require('request');

function getQr() {
	return new Promise(function(resolve, reject) {
		var options = { method: 'GET',
			url: 'https://api.qrserver.com/v1/create-qr-code/',
			qs: { size: '150x150', data: 'https://swapi.co/api/people/2' },
			headers: {
				'Postman-Token': '2c81f5e1-4abe-4f1d-96a3-bf20aa357268',
			    'Cache-Control': 'no-cache'
			}
		};

		request(options, function (error, response, body) {
		  if (error) throw new Error(error);

		  console.log(body);
		});

	});
}

async function hola() {
	let a = await getQr();
	console.log('hola');
}

hola();