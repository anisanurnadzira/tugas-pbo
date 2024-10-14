const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minimarket'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

// read
app.get('/', (req, res) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.render('index', { products: results });
    });
});

// create
app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    const { name, price, stock } = req.body;
    const query = 'INSERT INTO products (name, price, stock) VALUES (?, ?, ?)';
    connection.query(query, [name, price, stock], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// update
app.get('/edit/:id', (req, res) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.render('edit', { product: results[0] });
    });
});

app.post('/update/:id', (req, res) => {
    const { name, price, stock } = req.body;
    const query = 'UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?';
    connection.query(query, [name, price, stock, req.params.id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// delete
app.get('/delete/:id', (req, res) => {
    const query = 'DELETE FROM products WHERE id = ?';
    connection.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000, buka web melalui http://localhost:3000');
});
