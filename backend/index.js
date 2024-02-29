const { express, cors } = require("./imports/modules.imports")
const { connectDB } = require("./imports/config.imports")
// const { authRoutes, productRoutes } = require("./imports/routes.import")

const app = express();

// middleware's
app.use(express.json())
app.use(cors())

app.use("/", (req, res) => {
     res.send({ msg: "API is working" });
})

// app.use('/api', authRoutes)
// app.use('/api/products', productRoutes)


const PORT = process.env.PORT || 8000;
connectDB().then(() => {
     app.listen(PORT, () => {
          console.log(`Server is runing on PORT: ${PORT}`.yellow)
     })
})