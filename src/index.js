const { Page } = require('./models');

const run = async () => {
  const pages = await Page.findAll();
  console.log(pages);
};

run();
