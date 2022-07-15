const brain = require('brainjs');

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [10, 10, 10], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork();

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [0] },
  { input: [1, 0], output: [0] },
  { input: [1, 1], output: [1] },
]);

const output = net.run([1, 0]);

// should be close to 0
console.log(`1 & 0 == ${output[0]}`);

// should be close to 1
console.log(`1 & 1 == ${net.run([1, 1])[0]}`);
