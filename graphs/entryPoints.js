var formulatePath = function(fileName) {
  return './src/entryPoints/' + fileName + '.js';
};

module.exports = {
  '1_point': formulatePath('1_point'),
  '2_distanceBetweenVertices': formulatePath('2_distanceBetweenVertices'),
};
