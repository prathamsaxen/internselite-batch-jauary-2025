require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task-routes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
// When you are creating a big app this file will become messy, 
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// CORS =>>>>>>>>>>>>>>>>>>>> CROSS Origin Policies.
// Frontend => API Gateway => Server => MongoDB
// ==========   FE IP ======= GATE IP ====> SERVER IP
