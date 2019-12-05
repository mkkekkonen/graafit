const express = require('express');
const expressHandlebars = require('express-handlebars');

const env = process.env.NODE_ENV || 'development';

const { Category, Page } = require('./models');

const run = async () => {
  const app = express();

  const handlebars = expressHandlebars.create({
    helpers: {
      headerId: id => `menuItem${id}`,
      submenuId: id => `submenu${id}`,
      isChild: (pageId, categoryId) => pageId === categoryId,
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
    const pages = await Page.findAll();
    res.render('home', { categories, pages });
  });

  console.log('Listening on localhost:3000')
  app.listen(3000);

  // const pages = await Page.findAll();
  // console.log(pages);
};

run();
