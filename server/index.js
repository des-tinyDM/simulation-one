require('dotenv').config();
//Dependencies
const express = require('express');
const {json} = require('body-parser');
const app = express();
const cors = require('cors');
const massive = require('massive');
const pc = require('./controller/product_controller');
const port = process.env.PORT || 4000;

//Middleware
app.use( json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );
//Endpoints
app.get('/api/inventory', pc.getInventory)  
app.post('/api/product', pc.create)

// Listening
app.listen(port, () => console.log(`Listening on port ${port}`));