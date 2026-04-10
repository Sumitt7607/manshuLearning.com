require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));


// Schema
const reviewSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String,
  rating: {
    type: Number,
    default: 5,
  },
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);


// Routes
app.get("/api/reviews", async (req, res) => {
  const data = await Review.find().sort({ createdAt: -1 });
  res.json(data);
});

app.post("/api/reviews/add", async (req, res) => {
  const { name, role, text, rating } = req.body;

  const newReview = new Review({ name, role, text, rating });
  await newReview.save();

  res.json({ message: "Review added successfully" });
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port " + PORT);
});