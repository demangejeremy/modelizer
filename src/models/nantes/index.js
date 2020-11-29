const brain = window.brain;
// const fs = require("fs");

// const data = require("./data.js");

// create configuration for training
exports.Nantes = async function(test) {
	// const config = {
	// 	iterations: it,
	// 	log: true,
	// 	logPeriod: 50,
	// 	layers: [10],
	// };

	// Training data
	// const data = [];

	// Let's go
	let result = "";
	await fetch("/models/nantes.json")
		.then((response) => response.json())
		.then(async function(response) {
			const json = response;
			const network = new brain.recurrent.LSTM();
			network.fromJSON(json);
			const output = network.run(test);
			result = `Author name : <b>${output}</b> (Go to console for more informations)`;
			console.log(result);
			return result;
		});

	return result;
	// const network = new brain.recurrent.LSTM();
	// network.train(data, config);
	// const output = network.run(test);
	// const result = `${output} (Go to console for more informations)`;
	// return result;
};
