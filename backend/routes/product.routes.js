const { express } = require("../imports/modules.imports")
const { authorize } = require("../imports/middleware.imports")


const { addProductIntoCart, removeProductFromCart, getProductController, addProductIntoWishlist, removeProductFromWishlist, getCartController, getWishListController, getSingleProduct,addProductsQuentityCart } = require("../imports/controllers.imports")


const productRoutes = express.Router();


productRoutes.route("/cart").get(authorize, getCartController)
productRoutes.route("/wishlist").get(authorize, getWishListController)


productRoutes.route('/').get(getProductController);
productRoutes.route('/:ID').get(getSingleProduct);


productRoutes.route("/cart/:ID").post(authorize, addProductIntoCart)
productRoutes.route("/cart").post(authorize, addProductsQuentityCart)
productRoutes.route("/cart/:ID").delete(authorize, removeProductFromCart)

productRoutes.route("/wishlist/:ID").post(authorize, addProductIntoWishlist)
productRoutes.route("/wishlist/:ID").delete(authorize, removeProductFromWishlist)





module.exports = { productRoutes }