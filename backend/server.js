// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Security middleware
app.use(helmet());

// Simple CORS: allow all origins
app.use(cors());

// Body parser
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Admin Auth API is running",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
