const { asyncHandler, bcrypt, uuidv4 } = require("../imports/modules.imports")
const { generateToken } = require("../imports/config.imports")
const { UserModel } = require('../imports/models.imports')


const registerController = asyncHandler(async (req, res) => {
     try {
          const { name, email, avatar, password } = req.body;

          if (!name || !email || !password) {
               return res.status(400).json({ msg: "Please enter all the feilds" })
          }


          const existUser = await UserModel.findOne({ email })

          if (existUser) {
               return res.status(400).json({ msg: "User already exists" })
          }


          const user = await UserModel.create({ name, email, password, avatar, id: uuidv4() });

          if (user) {
               res.status(201).json('User registeration scuccessfull.')
          } else {
               res.status(400).json({ msg: "Feild to create the User" })
          }
     } catch (error) {
          console.log(error);
          res.status(400).send({ message: "Internal server error." })
     }

})

const loginController = asyncHandler(async (req, res) => {
     try {
          const { email, password } = req.body;

          const user = await UserModel.findOne({ email });

          if (user && (await bcrypt.compare(password, user.password))) {
               res.status(201).json({
                    message: "Login successfull.",
                    token: generateToken(user._id)
               });
          } else {
               console.log('Entered Password:', password);
               console.log('User Password in DB:', user ? user.password : 'User not found');

               res.status(401).json({ msg: "Invalid Email and Password" });
          }
     } catch (error) {
          console.log(error);
          res.status(400).send({ message: "Internal server error." })
     }
})

const getUserByIdController = asyncHandler(async (req, res) => {
     try {
          const userID = req.userID
          const user = await UserModel.findById(userID);

          if (!user) {
               return res.status(404).json({ success: false, message: 'User not found' });
          }

          res.status(200).json({ success: true, data: user });
     } catch (error) {
          console.error('Error in getUserByIdController:', error);
          res.status(500).json({ success: false, error: 'Internal Server Error' });
     }
});



module.exports = {
     registerController,
     loginController,
     getUserByIdController
}