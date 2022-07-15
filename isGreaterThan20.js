// Neural network to learn whether a given number is greater than 20

const brain = require('brainjs');

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [10], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork();

console.log("Generating training data...");
let trainingData = [];
for (let i = 0; i < 100000; i++) {
  const val = Math.floor(Math.random() * 30);
  trainingData.push({ input: [val], output: [val > 20 ? 1.0 : 0.0] });
}
// console.log(trainingData);

console.log("Thinking...");
net.train(trainingData);

const val = Math.floor(Math.random() * 30);
console.log(`${val} > 20 == ${net.run([val])[0]}`);
