const express = require('express');
const path = require('path');

const app = express();
const port = '3000';
const host = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', { 
    title: 'Home',
    activePage: 'home'
  });
});

app.get('/clients', (req, res) => {
  res.render('client_list', {
    title: 'Clients',
    activePage: 'client_list'
  });
});

app.get('/products', (req, res) => {
  res.render('product_list', {
    title: 'Products',
    activePage: 'product_list'
  });
});

app.listen(port, host, () => {
  console.log(`Server listening at ${host}:${port}`)
})



