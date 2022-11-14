const express = require("express");
require("dotenv").config();
const cors = require("cors");

const setupDB = require("./src/config/db");
setupDB();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require("./src/components/auth/authRoutes");
const productRoutes = require("./src/components/auth/authRoutes");

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.listen(port, console.log("Server is working on port ", port));
