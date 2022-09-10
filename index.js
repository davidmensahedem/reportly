const express = require("express");
const app = express();
const cors = require("cors");


require('dotenv').config();

// The report incident route
const incidentRoutes = require("./routes/incidents");

//use the middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Use the route
app.use(process.env.REPORTLY_API_VERSION, incidentRoutes);


app.get("/", (req, res) => {
  res.send("Reportly (Version 1.0.0)");
});


// set the port
const port = process.env.PORT

//listen on the port
app.listen(port, () => {
  console.log(`Server listening on port: ${port}... `);
});

