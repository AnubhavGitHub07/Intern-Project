const mongoose = require("mongoose"); // Importing mongoose module

// Async function to connect to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database Connected: ${conn.connection.host}`)
    }

    catch (error) {
        console.log(error.message);
        process.exit(1);
    }


};

module.exports = connectDB;