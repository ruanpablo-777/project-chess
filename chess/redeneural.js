// Função de ativação sigmoid
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

// Produto matriz-vetor: calcula soma ponderada
function weightedSum(weights, inputs) {
  return weights.map((neuronWeights) =>
    neuronWeights.reduce((sum, weight, i) => sum + weight * inputs[i], 0)
  );
}

// Rede Neural simples
class SimpleNeuralNetwork {
  constructor(weights, biases) {
    this.weights = weights; // array de matrizes
    this.biases = biases;   // array de vetores
  }

  feedforward(inputs) {
    let layerInputs = inputs;

    for (let layerIndex = 0; layerIndex < this.weights.length; layerIndex++) {
      const layerWeights = this.weights[layerIndex];
      const layerBiases = this.biases[layerIndex];

      // z = W·inputs + b
      const z = weightedSum(layerWeights, layerInputs).map(
        (val, i) => val + layerBiases[i]
      );

      // aplica sigmoid
      layerInputs = z.map(sigmoid);
    }

    return layerInputs;
  }
}

// --- Configuração da rede ---
// Rede com 2 entradas (os números a somar), 1 neurônio de saída
const weights = [
  [[1, 1]] // saída = soma das entradas
];

const biases = [
  [0] // sem bias
];

const network = new SimpleNeuralNetwork(weights, biases);

// --- Teste ---
const input = [1, 2]; // queremos saber 2 + 2
const output = network.feedforward(input);

console.log("Saída da rede (aproximada entre 0 e 1):", output[0]);

// Se quiser o valor aproximado sem sigmoid:
const linearOutput = input[0] * weights[0][0][0] + input[1] * weights[0][0][1] + biases[0][0];
console.log("Saída linear (valor exato):", linearOutput);
