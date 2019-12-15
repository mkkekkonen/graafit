var formulatePath = function(fileName) {
  return './src/entryPoints/' + fileName + '.js';
};

var generateEntryPoints = entryPoints => {
  const result = {};
  entryPoints.forEach(entryPoint => {
    result[entryPoint] = formulatePath(entryPoint);
  });
  return result;
}

var entryPointNames = [
  '1_point',
  '1_line',
  '1_vertexEdge',
  '2_distanceBetweenVertices',
];

module.exports = generateEntryPoints(entryPointNames);
