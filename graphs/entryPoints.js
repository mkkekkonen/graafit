var formulatePath = function(fileName) {
  return './src/entryPoints/' + fileName + '.js';
};

module.exports = {
  point: formulatePath('point'),
  distanceBetweenVertices: formulatePath('distanceBetweenVertices'),
};
