const mongoose = require("mongoose");

async function connectToDB() {
  // If a connection is already open or opening, reuse it instead of creating a new one
  if (mongoose.connection.readyState >= 1) {
    console.log("Reusing existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");
  } catch (err) {
    console.log("Database connection error: ", err);
  }
}

module.exports = connectToDB;