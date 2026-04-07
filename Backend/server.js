require("dotenv").config(); // 🔥 IMPORTANT

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// 🔥 ENV VARIABLES
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


// 🔥 MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// 🔥 Schema
const reviewSchema = new mongoose.Schema({
  name: String,
  role: String,
  text: String,
  rating: Number,
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);


// ================= ROUTES =================

// ✅ Add Review
app.post("/api/reviews/add", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();

    res.json({ message: "Review Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error adding review" });
  }
});


// ✅ Get Reviews
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
});


// 🔥 Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});