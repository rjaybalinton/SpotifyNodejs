const mysql = require('mysql2'); // Change this line

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music_app'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;
