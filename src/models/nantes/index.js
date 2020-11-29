const brain = window.brain;
const fs = require("fs");

// const data = require("./data.js");

// create configuration for training
exports.Nantes = function(test, it) {
	const config = {
		iterations: it,
		log: true,
		logPeriod: 50,
		layers: [10],
	};

	// Training data
	// const data = [];

	// Let's go
	const json = JSON.parse(fs.readFileSync("trained.json"));
	const network = new brain.recurrent.LSTM();
	network.fromJSON(json);
	const output = network.run(test);
	const result = `${output} (Go to console for more informations)`;
	return result;

	// const network = new brain.recurrent.LSTM();
	// network.train(data, config);
	// const output = network.run(test);
	// const result = `${output} (Go to console for more informations)`;
	// return result;
};
