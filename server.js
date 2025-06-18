const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(3000, () => {
      console.log("🚀 Server running on port 3000");
    });
  })
  .catch(err => {
    console.error("❌ MongoDB Error:", err);
  });
