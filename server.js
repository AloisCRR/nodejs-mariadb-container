const express = require('express');
const app = express();
const pool = require('./db');

app.listen(3000, () =>{
    console.log('Server on port', 3000);
})

app.get('/products', async (req, res)=> {
    let conn;
    try {
        const conn = await pool.getConnection();
        const query = 'select * from products';
        const rows = await conn.query(query);
        res.status(200).json(rows);
    } catch (e) {
        throw e
    } finally {
        if (conn) return conn.release();
    }
});