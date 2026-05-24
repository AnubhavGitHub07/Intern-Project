const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users" , userRoutes);

app.get("/", (req, res) => {
    res.send("Devcollab is running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
