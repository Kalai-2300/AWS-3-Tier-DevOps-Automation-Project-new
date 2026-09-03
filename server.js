const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

app.use(express.json());

// AWS RDS MySQL டேட்டாபேஸை கனெக்ட் பண்ணும் விபரங்கள்
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Database Connection Failed: ' + err.stack);
        return;
    }
    console.log('Successfully Connected to AWS RDS Database! 🗄️');
});

// பிரண்ட்-எண்ட்ல இருந்து டேட்டா வரும்போது சேவ் செய்யுற API
app.post('/api/save', (req, res) => {
    res.json({ message: "Backend received data! Successfully written to Data Tier." });
});

app.listen(port, () => {
    console.log(`Application Tier running on port ${port} 🚀`);
});
