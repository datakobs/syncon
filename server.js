const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// CSS Middleware
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/unternehmen', (req, res) => {
  res.render('unternehmen');
});

app.get('/projekte', (req, res) => {
  res.render('projekte');
});

app.get('/kontakt', (req, res) => {
  res.render('kontakt');
});

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server running on Port ${port}`);
});
