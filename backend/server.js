const express = require("express"); //import express library

const app = express(); //initialize the express application

app.get("/" , ( req , res ) =>{ //create a route for the home page
    res.send("Devcollab is running");
});

const PORT = 5001;

app.listen(PORT , () =>{ //start the server
    console.log(`Server running on port ${PORT}`);
});
