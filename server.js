const express = require('express');
const app = express();
const pool = require('./db');

app.get('/products', async (req, res)=> {
    try {
        const conn = pool.getConn();
        const query = 'select * from products';
        const rows = await conn.query(query);
        res.status(200).json(rows);
    } catch (e) {
        console.log(e)        
    }
})

app.listen(3000, () =>{
    console.log('Server in port ', app.get('port'));
})