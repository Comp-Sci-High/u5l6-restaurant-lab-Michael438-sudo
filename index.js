// Task 1: Set up server [1 pt]
// Install + import express and mongoose 
const express = require("express");
const mongoose = require("mongoose");

// Create app instance
const app = express();

// Middleware to process JSON
app.use(express.json());

// Logging middleware (already given)
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Async function to start server
async function startServer() {
  
// Connect to MongoDB (replace with YOUR SRV string)
    await mongoose.connect("mongodb+srv://SE12:CSH2026@cluster0.cev1a0w.mongodb.net/?appName=Cluster0");

    // Start server
    app.listen(3000, () => {
      console.log(3000);
    });
  }
// Call startServer
startServer();


// Task 2: Define schema [2 pts]
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true    
  },
  cost: {
    type: Number,
    required: true
  },
  category: {
    type: String,
  },

});


// Task 3: Define model [1 pt]
const MenuItem = mongoose.model("MenuItem", menuItemSchema);


// Task 4: POST /menu/test [2 pts]
app.post("/menu/test", async (req, res) => {
  
    const testItem = new MenuItem({
      name: "Test Burger",
      cost: 4.99,
      category: "Fast Food",
    });

    await testItem.save();

  
});


// Task 5: GET /menu [2 pts]
app.get("/menu", async (req, res) => {

    const items = await MenuItem.find();
    res.json(items);
   
});


// Task 6: GET /menu/value [2 pts]
app.get("/menu/value", async (req, res) => {
  
    const items = await MenuItem.find({ cost: { $lt: 5 } });
    res.json(items);
  });



// Task 7: POST /menu/new [2 pts]
app.post("/menu/new", async (req, res) => {

    const testItem = new MenuItem({
      name: "Test Burger",
      cost: 4.99,
      category: "Fast Food",
    });

    await testItem.save();
});
