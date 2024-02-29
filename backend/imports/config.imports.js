const { connectDB } = require('../config/db')
const { generateToken } = require('../config/generateToken')

module.exports = { connectDB, generateToken }