const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());

// Routes
app.use("/api", productRoutes);

const PORT = process.env.PORT || 5000; // Use Heroku's assigned port or default to 5000 locally
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
