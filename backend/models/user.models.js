
const { mongoose, bcrypt } = require("../imports/modules.imports");

const userSchema = new mongoose.Schema({
     email: {
          type: String,
          required: true,
          unique: true
     },
     name: {
          type: String,
          required: true
     },
     phoneNumber: {
          type: String
          // You may add additional validation for phone numbers as needed
     },
     password: {
          type: String,
          required: true
     },
     wishlist: [
          {
               type: mongoose.Schema.Types.ObjectId, // Assuming wishlist item refers to the ObjectId of a product document
               ref: 'products'
          }
     ],
     orders: [
          {
               type: mongoose.Schema.Types.ObjectId, // Assuming wishlist item refers to the ObjectId of a product document
               ref: 'products'
          }
     ],
     cart: [
          {
               productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'products'
               },
               quantity: {
                    type: Number
               }
          }
     ],
});
userSchema.pre('save', async function (next) {
     if (this.isModified('password') || this.isNew) {
          try {
               const salt = await bcrypt.genSalt(10);
               const hashedPassword = await bcrypt.hash(this.password, salt);
               this.password = hashedPassword;
               next();
          } catch (error) {
               next(error);
          }
     } else {
          return next();
     }
});

const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel }