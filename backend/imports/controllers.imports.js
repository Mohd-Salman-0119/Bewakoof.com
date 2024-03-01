const { signupController, loginController, getUser } = require("../controllers/auth.controller");

const { addProductIntoCart, removeProductFromCart, getProductController, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController, getSingleProduct, addProductsQuentityCart } = require("../controllers/product.controller")

module.exports = { signupController, loginController, addProductIntoCart, removeProductFromCart, getProductController, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController, addProductsQuentityCart, getSingleProduct, getUser }