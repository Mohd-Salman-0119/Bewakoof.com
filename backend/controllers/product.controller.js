const { asyncHandler } = require('../imports/modules.imports')
const { ProductModel, UserModel } = require('../imports/models.imports')

const getProductController = asyncHandler(async (req, res) => {
     try {
          const { _gender, _sort, _category, _size, _brand, _design, _rating, _color, _q } = req.query
          let products;
          let query = {};
          let sortOptions = {};

          if (_gender) {
               query.gender = _gender;
               console.log(_gender)
          }

          if (_sort) {
               if (_sort === "HTL") {
                    sortOptions = { discounted_price: -1 };
               } else if (_sort === "LTH") {
                    sortOptions = { discounted_price: 1 };
               } else if (_sort === "popular") {
                    query.discounted_price = { $gt: 300 };
                    sortOptions = { discounted_price: 1 };
               }
          }

          if (_category) {
               const categories = _category.split(",")
               query.category = { $in: categories }
          }
          if (_size) {
               const sizes = _size.split(",")
               query.size = { $in: sizes }
          }
          if (_brand) {
               const brands = _brand.split(",")
               query.brand = { $in: brands }
          }
          if (_design) {
               const designs = _design.split(",")
               query.design = { $in: designs }
          }
          if (_rating) {
               const ratings = _rating.split(",")
               query.rating = { $in: ratings }
          }
          if (_color) {
               const colors = _color.split(",")
               query.color = { $in: colors }
          }
          if (_q) {
               query.$or = [
                    { name: { $regex: _q, $options: 'i' } },
                    { category: { $regex: _q, $options: 'i' } }

               ];
          }
          console.log(query)

          products = await ProductModel.find(query).sort(sortOptions);
          res.send(products)
     } catch (error) {
          res.send({ msg: "Something went wrong, Cannot get products" })
     }
})

const getSingleProduct = asyncHandler(async (req, res) => {
     const ID = req.params.ID;
     try {
          const products = await ProductModel.findOne({ _id: ID });
          res.send(products)
     } catch (error) {
          res.send({ msg: "Something went wrong, Cannot get a products" })
     }
})

const addProductsQuentityCart = asyncHandler(async (req, res) => {
     const newCarts = req.body;
     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId)
          if (!user) {
               res.status(500).json({ msg: "Feild to find user" })
          }
          user.cart = newCarts;

          user.save();

          res.status(200).json({ msg: "Cart updated successfully" })
     } catch (error) {
          res.status(401).json({ msg: "Something went wrong, Cannot add carts" })
     }
})

const addProductIntoCart = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          const existingCartItem = user.cart.find(item => item.productId.equals(productId));

          if (existingCartItem) {
               existingCartItem.quantity += 1;
          } else {
               // Push a new object to the cart array
               user.cart.push({ productId: productId, quantity: 1 });
          }

          // Save the updated user object back to the database
          await user.save();

          res.send({ msg: `Product added to cart successfully` });

     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot add the product to the cart" });
          console.log(error);
     }

})
const removeProductFromCart = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          // Find the index of the product in the cart
          const productIndex = user.cart.findIndex(item => item.productId.equals(productId));

          if (productIndex !== -1) {
               // Remove the product from the cart
               user.cart.splice(productIndex, 1);

               // Save the updated user object back to the database
               await user.save();

               return res.send({ msg: `Product removed from the cart successfully` });
          } else {
               return res.send({ msg: `Product not found in the cart` });
          }
     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot remove the product from the cart" });
          console.log(error);
     }
})
const addProductIntoWishlist = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          const existingCartItem = user.wishlist.find(item => item.equals(productId));

          if (!existingCartItem) {
               user?.wishlist?.push(productId);
          } else {
               res.send({ msg: `Product is already added in the wishlist` })
          }

          await user.save();

          res.send({ msg: `Product added to wishlist successfully` });

     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot add the product to the cart" });
          console.log(error);
     }
})


const removeProductFromWishlist = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          // Find the index of the product in the cart
          const productIndex = user.wishlist.findIndex(item => item.equals(productId));

          if (productIndex !== -1) {
               // Remove the product from the cart
               user.wishlist.splice(productIndex, 1);

               // Save the updated user object back to the database
               await user.save();

               return res.send({ msg: `Product removed from the wishlist successfully` });
          } else {
               return res.send({ msg: `Product not found in the wishlist` });
          }
     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot remove the product from the wishlist" });
          console.log(error);
     }
})

const getCartController = asyncHandler(async (req, res) => {
     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);
          console.log(userId)

          if (user) {
               const cart = user?.cart;
               res.send(cart)
          } else {
               res.status(400).send({ msg: "Cart not found in the user" })
          }

     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot get cart Items" });
          console.log(error);
     }
})

const getWishListController = asyncHandler(async (req, res) => {
     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId)

          if (user) {
               const wishlist = user?.wishlist;
               res.send(wishlist)
          } else {
               res.status(400).send({ msg: "WishList not found in the user" })
          }

     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot get wishlist Items" });
          console.log(error);
     }
})








module.exports = { getProductController, addProductIntoCart, removeProductFromCart, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController, getSingleProduct, addProductsQuentityCart }