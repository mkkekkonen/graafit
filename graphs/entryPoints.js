const fs = require('fs');
const path = require('path');

const formulatePath = fileName => {
  return './src/entryPoints/' + fileName + '.js';
};

const generateEntryPoints = entryPoints => {
  const result = {};
  entryPoints.forEach(entryPoint => {
    result[entryPoint] = formulatePath(entryPoint);
  });
  return result;
}

const getEntryPointNames = () => fs.readdirSync(path.resolve('.', 'src', 'entryPoints'))
  .map(fileName => {
    const [nameWithoutExtension] = fileName.split('.');
    return nameWithoutExtension;
  });

module.exports = generateEntryPoints(getEntryPointNames());
