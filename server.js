const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main'); // Set the default layout
app.use(expressLayouts);

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});