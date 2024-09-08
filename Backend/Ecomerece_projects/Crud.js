// app.js
const express = require('express');
const app = express();
const {Product}=require('./Model_Schema');
  
// app.get('/crud', async (req, res) => {
//     try {
//       const Data = await Product.find();
//       console.log(Data+"proudct data is ");
//       res.status(200).json(Data); // Send the data as a JSON response
//     } catch (err) {
//       console.log('Error during fetching data from database:', err);
//       res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
//     }
//   });
app.get('/crud', async (req, res) => {
  try {
    const Data = await Product.find();
    console.log(Data); // Log data on the backend
    res.status(200).json(Data);
  } catch (err) {
    console.log('Error during fetching data from database:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
 // Export the express app
