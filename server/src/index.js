const express = require('express');
const expressHandlebars = require('express-handlebars');

const env = process.env.NODE_ENV || 'development';

const { Category, Page } = require('./models');

const run = async () => {
  const app = express();

  const handlebars = expressHandlebars.create({
    helpers: {
      lol: () => 'lol',
    },
  });

  const assetDirectory = env === 'debug' ? 'server/assets' : 'assets';
  const viewDirectory = env === 'debug' ? 'server/src/views' : 'src/views';

  app.use(express.static(assetDirectory));

  app.engine('handlebars', handlebars.engine); 
  app.set('view engine', 'handlebars');
  app.set('views', viewDirectory);

  app.get('/', async (req, res) => { 
    const categories = await Category.findAll();
    res.render('home', { categories });
  });

  app.listen(3000);

  // const pages = await Page.findAll();
  // console.log(pages);
};

run();
