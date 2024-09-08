

const express = require('express');
require('./conn');
const cors = require('cors');

//  const Mycrud=require('./Crud');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
// strip 
// const SignupCollection = require('./Model_Schema');
// const PaymentModel=require('./Model_Schema');

//  const Product=require('./Model_Schema');
 const {PaymentModel,SignupCollection,Product,Admin}=require('./Model_Schema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // For password hashing
const { useState } = require("react");

const app = express();
const PORT = process.env.PORT || 30001;
// const cors=require('cors');

app.use(express.json());
app.use(cors());

app.post('/postData', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {
    // Check if the email already exists in the database
    const existingUser = await SignupCollection.findOne({ email: email });
    
    if (existingUser) {
      return res.status(400).send({ message: 'Email already exists in the database' });
    }

    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // If the email doesn't exist, create a new document based on the SignupCollection schema
    const savingData = new SignupCollection({ name, email, password: hashedPassword });

    // Save the data to the database
    await savingData.save();

    return res.status(200).send({ message: 'Data saved successfully in MongoDB' });
  } catch (err) {
    console.error('Error occurred while saving data to the database: ' + err);
    return res.status(500).send({ message: 'Failed to save data in the database' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await SignupCollection.findOne({ email: email });

    if (user) {
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Password is correct, generate a token
        const token = await user.generateAuthToken();

        // Send user data along with the success message
        res.send({
          message: 'Yes, You Are Logged In',
          user: {
            _id: user._id, // Include the user's ID
            name: user.name,
            email: user.email,
            token: token, // Include the generated token
          },
        });
      } else {
        // Incorrect password
        res.status(400).send({ message: 'Sorry, Incorrect Password' });
      }
    } else {
      // User not found
      res.status(400).send({ message: 'Sorry, Email not found' });
    }
  } catch (err) {
    console.log('Error occurred in the database: ' + err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});
app.get('/logout', (req, res) => {
  // Here you can clear the token from the user's session if needed
  res.send({ message: 'You are Logout' });
});
// The orderSchema code you provided can be placed here
const orderSchema = new Schema({
  token: String,
  PaymentMethod:String,
    lastfourdigit:Number,
  products: [
    {
      product_name: String,
      title: String,
      image: String,
      price: Number,
      quantity: Number,
      rating: Number,
    },
  ],
  email: String,
  customerId:String,
  Date: {
    type: Date,
    default: Date.now,
  },
});
const OrderCollection2 = model('orders1', orderSchema);
module.exports = OrderCollection2;
app.post('/order', async (req, res) => {
  try {
    // Extract order data from the request body
    const { token, products, totalPrice,email,customerId } = req.body;
    console.log('customer id is '+customerId);
    console.log('customer email is '+email);
    // Create a new order document using the OrderCollection model
    const newOrder = OrderCollection2({ token, products, totalPrice ,email,customerId});
 console.log(newOrder);
    // Save the order to the database
    const savedOrder = await newOrder.save();
    // Respond with a success message and the saved order document
    res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 // Import your PaymentModel
 app.post('/send/data', async (req, res) => {
   console.log(req.body.name+"data is ");
  try {
    const paymentData = {
      brand: req.body.brand,
      country: req.body.country,
      cvc_check: req.body.cvc_check,
      dynamic_last4: req.body.dynamic_last4,
      exp_month: req.body.exp_month,
      exp_year: req.body.exp_year,
      funding: req.body.funding,
      id: req.body.id,
      last4: req.body.last4,
      name: req.body.name,
      object: req.body.object,
      tokenization_method: req.body.tokenization_method,
      customerId: req.body.customerId, // Corrected field name
      orderId: req.body.orderId, // Corrected field name
      wallet: req.body.wallet,
      shipingaddress:{
         phone:req.body.phone,
         city:req.body.city,
         state:req.body.state,
         country:req.body.country,
         postalcode:req.body.postalcode
      }
    }
     console.log({paymentData:paymentData});
    const newPayment = new PaymentModel(paymentData);
    // Save the payment data to the database
     console.log(newPayment)
    await newPayment.save();
    res.status(201).json({ message: 'Payment data saved successfully' });
  } catch (error) {
    console.error('Error saving payment data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 // add proudct information here 
  app.post('/addproduct',async(req,res)=>{
       
    try{ 
     const newproduct= new Product(req.body);
      const saveproduct= await newproduct.save();
       res.json(saveproduct);   
      }
       catch(err){
         console.log('error accured during posting the product here ',err);
          res.status(500).json('error accured during saving new product here ');
       }
  })




 // getDatafrom addproduct
 app.get('/getallData',async(req,res)=>{
  try{
          const allDatais= await Product.find();
           res.send({message:allDatais});  
  } 
    catch(err) {
     console.log('error accured in  the data bse here '+err);
   }
})

 // reviewpotion
//  app.post('/review/comment/data',async(req,res)=>{
//   const {Product_id,review_name,rating_,comment}=req.body;
//      try
//      {
//         const savereviewdata=await Product.save({_id,review_name,Rate,comment});
        
//      }
//       catch(err){
//          console.log('error accured to store the data '+err);
//       }
//  })
 app.post('/review/comment/data', async (req, res) => {
  const { _id,  reviews_name, Rate, comment } = req.body;
console.log(_id,reviews_name,Rate,comment);
  try {
    // Validate the received data
    if (!_id || !reviews_name || !Rate || !comment) {
      return res.status(400).json({ error: 'Invalid or missing data in the request' });
    }

    // Find the product by _id
    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Create a new review object
    const newReview = {
      reviews_name,
      Rate,
      comment, // Include the comment field
    };

    // Add the new review to the product's reviews array
    const pushing_reviews=product.reviews.push(newReview);

    // Save the updated product document
    await product.save();

    res.status(201).json({ message: 'Review added successfully'});
  } catch (err) {
    console.error('Error occurred while storing the data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


 // Admin Page 
 // Create a new Admin document using the Admin model
    // const newAdmin = new Admin({
    //   Admin_name,
    //   Admin_email,
    //   Admin_password,
    // });

    // Save the newAdmin document to the database
    // await newAdmin.save();

    // Check if the document was successfully saved
    // if (newAdmin) {
    //   res.send({ message: 'Data saved in Admin Table' });
    // } else {
    //   res.send({ message: 'Data not saved' });
    // }
    app.post('/Admin', async (req, res) => {
      const { Admin_name, Admin_email, Admin_password } = req.body;
      console.log(Admin_name, Admin_email, Admin_password);
    
      try {
        const authenticating_admin = await Admin.findOne({
          Admin_name,
          Admin_email,
          Admin_password,
        });
    
        if (!authenticating_admin) {
          res.status(401).json({ message: 'Invalid credentials' });
        } else {
          // Send the admin data to the frontend
          res.status(200).json({ message: 'Successfully logged in', admin: authenticating_admin });
        }
      } catch (err) {
        console.error('Error occurred during admin authentication:', err);
        res.status(500).json({ message: 'An error occurred during authentication' });
      }
    });


     app.get('/count',async(req,res)=>{
       console.log('hello couting route ')
       try{
        const totalProducts = await Product.countDocuments();
        const totalOrders = await  OrderCollection2.countDocuments();
        const totalPayments = await PaymentModel.countDocuments();
        const totalUsers=await SignupCollection.countDocuments();
         console.log(totalProducts, totalPayments,totalUsers,totalOrders);
         console.log('no data ')
        
        res.json({ totalProducts, totalOrders, totalPayments ,totalUsers});
       }
        catch(err){
           console.log('error accured during counting  '+err);
        }
     })
    
    // crud 
    app.get('/crud', async (req, res) => {
      try {
        const Data = await Product.find();
        
        res.status(200).json(Data); // Send the data as a JSON response
      } catch (err) {
        console.log('Error during fetching data from database:', err);
        res.status(500).json({ error: 'Internal Server Error' }); // Send an error response
      }
    });
// deleteing products


 app.delete('/delete_item/:_id', async (req, res) => {
   const { _id } = req.params;
    console.log(_id);
   try {
     const deletedProduct = await Product.findByIdAndRemove(_id);
     if (deletedProduct) {
       res.status(200).send({ message: 'Product successfully deleted' });
     } else {
       res.status(404).send({ message: 'Product not found' });
     }
   } catch (err) {
     console.error('Error occurred during deleting data:', err);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });
 
  app.put("/update_record/:_id", async (req, res) => {
    const { _id } = req.params;
    const updateData = req.body;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(_id, updateData, {
        new: true, // To get the updated document as a response
      });
      if (updatedProduct) {
        res.status(200).json({ message: 'Product updated successfully', updatedProduct });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error('Error occurred during updating data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
   // geting_dash board Data for the user _dashboard
   app.get('/user_dashboard/:id', async (req, res) => {
    const _id = req.params.id; // Extract the user ID from params
    console.log(_id)
    try {
      const findData = await PaymentModel.find({ customerId: _id });
      if (findData.length > 0) { // Check if any data was found
        res.send(findData);
      } else {
        res.send("No data found for this user.");
      }
    } catch (err) {
      console.error('Error occurred during data retrieval for user_dashboard: ',err);
      res.status(500).send("An error occurred during data retrieval.");
    }
  });
  // app.get('/get/order/data', async (req, res) => {
  //   const { userEmail } = req.query; // Use req.query to get query parameters for a GET request
  //   console.log(userEmail);
  //   try {
  //     const OrderData = await OrderCollection2.find({ email: userEmail });
  //     if (OrderData) {
  //       res.send(OrderData);
  //       console.log(OrderData);
  //     } else {
  //       res.send('Failed to fetch products from the database');
  //     }
  //   } catch (err) {
  //     console.log('Error occurred in the database: ' + err);
  //     res.status(500).send('Internal Server Error');
  //   }
  // });
  // getting order detaills
  app.get('/getorder/:_id', async (req, res) => {
    const { _id } = req.params;
    console.log('The _id is: ' + _id);
    try {
      // Assuming that `customerId` is the field in your order data collection that matches with user `_id`
      const orderData = await OrderCollection2.find({ customerId: _id });
      if (orderData.length > 0) {
        res.status(200).json(orderData);
      } else {
        res.status(404).json({ message: 'No orders found for the user.' });
      }
    } catch (err) {
      console.error('Error occurred in the database:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
app.listen(PORT, () => {
  console.log('The project is running on port number ' + PORT);
});




 












