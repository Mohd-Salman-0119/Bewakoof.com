require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const colors = require("colors")
const { v4: uuidv4 } = require("uuid")
const asyncHandler = require("express-async-handler")
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

module.exports = {
     express,
     mongoose,
     bcrypt,
     asyncHandler,
     colors,
     cors,
     jwt,
     uuidv4,
     cloudinary,
     multer
}