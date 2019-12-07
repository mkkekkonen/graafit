var fs = require('fs');
var path = require('path');

const express = require('express');
const expressHandlebars = require('express-handlebars');

const env = process.env.NODE_ENV || 'development';

const { Category, Page } = require('./models');

const parseParam = param => `${param}`.toLowerCase().replace(/-/g, ' ');

const getNavData = async () => {
  const categories = await Category.findAll();
  const pages = await Page.findAll();
  return { categories, pages };
};

const run = async () => {
  const app = express();

  const handlebars = expressHandlebars.create({
    helpers: {
      headerId: id => `menuItem${id}`,
      submenuId: id => `submenu${id}`,
      isChild: (pageId, categoryId) => pageId === categoryId,
      toUrlFormat: name => `${name}`.toLowerCase().replace(/\s/g, '-'),
    },
  });

  const assetDirectory = env === 'debug' ? 'server/assets' : 'assets';
  const contentDirectory = env === 'debug' ? 'server/content' : 'content';
  const viewDirectory = env === 'debug' ? 'server/src/views' : 'src/views';

  app.use(express.static(assetDirectory));
  app.use(express.static(contentDirectory))

  app.engine('handlebars', handlebars.engine); 
  app.set('view engine', 'handlebars');
  app.set('views', viewDirectory);

  app.get('/', async (req, res) => { 
    const navData = await getNavData();
    res.render('home', { ...navData });
  });

  app.get('/:categoryName/:pageName', async (req, res) => {
    const navData = await getNavData();
    const { categoryName, pageName } = req.params;

    const category = navData.categories
      .find(category => `${category.name}`.toLowerCase() === parseParam(categoryName));
    const page = navData.pages
      .find(page => `${page.name}`.toLowerCase() === parseParam(pageName));

    if (!category || !page) {
      res.render('notFound', { ...navData });
      return;
    }

    fs.readFile(
      path.resolve(__dirname, '..', 'content', 'md', page.templateFile),
      (err, data) => {
        if (err) {
          res.render('error', { message: err.message });
          return;
        }

        res.render('page', { ...navData, category, page, markdown: data.toString().replace(/\n/g, '\\n') });
      }
    )
  });

  console.log('Listening on localhost:3000')
  app.listen(3000);

  // const pages = await Page.findAll();
  // console.log(pages);
};

run();
