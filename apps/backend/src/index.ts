import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
