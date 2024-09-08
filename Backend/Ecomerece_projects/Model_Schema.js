// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = "hellomynameismirishfaqahmad";

// const SignupSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//   },
//   password: String,
//   tokens: [
//     {
//       token: {
//         type: String,
//         required: true, // Corrected the typo 'require' to 'required'
//       },
//     },
//   ],
// });






// // We are generating a token
// SignupSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, SECRET_KEY); // Corrected the secret key
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log('Error occurred during token generation: ' + err);
//   }
// };

// const SignupCollection = mongoose.model('Signup', SignupSchema);
// module.exports  = SignupCollection;






// SignupSchema.methods.generateAuthTocken = async function () {
//   try {
//     // Check if _id is defined
//     if (!this._id) {
//       throw new Error('User _id is undefined');
//     }

//     const tocken = jwt.sign({ _id: this._id.toString() }, "mynameismirishfaqahmad");
//     this.tokens = this.tokens.concat({ token: tocken });
//     await this.save();
//     console.log(tocken);
//     return tocken;
//   } catch (err) {
//     console.log('Error occurred: ' + err.message);
//     throw err; // Rethrow the error to handle it at a higher level
//   }
// };































const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { Schema, model } = require('mongoose');

const SECRET_KEY = "hellomynameismirishfaqahmad"; // Replace with your own secret key

const SignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// We are generating a token
SignupSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log('Error occurred during token generation: ' + err);
  }
};

const SignupCollection = mongoose.model('customer', SignupSchema);
const paymentSchema = new mongoose.Schema({
  brand: String,
  country: String,
  cvc_check: String,
  dynamic_last4: String,
  exp_month: Number,
  exp_year: Number,
  funding: String,
  id: String,
  last4: String,
  name: String,
  email: String,
  amount: Number,
  object: String,
  tokenization_method: String,
  customerId: String,
  orderId: String,
  wallet: String,
  shipingaddress: {
    phone: String,
    city: String,
    state: String,
    country:String,
    postalcode: Number,
  },
  timeStamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Payment', paymentSchema);
const PaymentModel = mongoose.model('Payments', paymentSchema);
// module.exports = PaymentModel;




 // customerSchema is 
const ProductSchema = new mongoose.Schema({
  // product_name: String,
  rating: Number,
  quantity: Number,
  description: String,
  price: Number,
  availability: Boolean,
  category: String,
  reviews: [
    {
      reviews_name: String,
       Rate: Number,
      comment: String,
       
    }
  ],
  
  customerId: String,
  image_url:String,
  orderId: String,
});
const Product = mongoose.model('Product', ProductSchema);
 const AdminSchema=new mongoose.Schema({
     Admin_name:String,
     Admin_email:String,
     Admin_password:String,
      

 });
  const Admin= mongoose.model('Admin',AdminSchema);
// const SignupCollection = mongoose.model('Signup', SignupSchema);

// module.exports = SignupCollection;





module.exports = {PaymentModel,SignupCollection,Product,Admin}