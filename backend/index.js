import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book_route.js";
import cors from "cors"

import userRoute from "./route/user_route.js"

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/book", bookRoute);
app.use("/user",userRoute)

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
