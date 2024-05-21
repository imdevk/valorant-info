const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Require your routes
const indexRoutes = require('./routes/index');

// Use the route handlers
app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
