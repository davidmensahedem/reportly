const { default: axios } = require("axios");
const express = require("express");
const db = require("../model/connection");
const router = express.Router();



// GET -- GET all the Incident Reports
// this route handles listing all the incident reports
router.get("/incidents", (req, res) => {
  try {

    db.query("SELECT * from incidents;", null, (error, response) => {
      if (error) {
        res.status(400).json({
          success: false,
          message: error
        });
      } else {


        res.status(200).json({
          success: true,
          message: "Successful",
          incidents: response.rows
        });


      }
    });




  } catch (error) {
    res.status(500).json({
      success: false,
      message: error
    });
  }
});



// GET a particular incident by client_id
// this route handles listing an incident report by id
router.get("/incident/:id", (req, res) => {

  const { id: client_id } = req.params;

  if (!client_id) {
    return res.status(400).json({
      success: false,
      message: "Invalid id"
    });
  }

  try {

    db.query("SELECT * from incidents WHERE client_id=$1", [client_id], (error, response) => {

      if (error) {
        return res.status(400).json({
          success: false,
          message: error,
        });
      } else if (response.rows.length == 0) {

        return res.status(400).json({
          success: false,
          message: "No incident with this id",
        });

      } else {
        return res.status(200).json({
          success: true,
          message: "Successful",
          incident: response.rows[0]
        });

      }

    });




  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Couldn't get incidents",
    });
  }
});






// POST -- Create an Incident Report
// this route handles creating a new incident report
router.post("/incident", async (req, res) => {

  // validate the request body's data
  if (Object.keys(req.body).length == 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid data"
    });
  } else if (!req.body.incident_desc || !req.body.city || !req.body.country) {
    return res.status(400).json({
      success: false,
      message: "All information required"
    });
  }

  const { incident_desc, city, country } = req.body;

  try {

    try {
      // get the weather information
      const { data } = await axios.get(process.env.OPENWEATHERMAP_URL, {
        params: {
          "q": city,
          "APPID": process.env.OPENWEATHERMAP_KEY
        }
      });

      var { weather: weatherReport } = data;

    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "City not found"
      });
    }

    // insert the :weatherReport report and the request body's 
    // data into the incidents database
    db.query("INSERT INTO incidents (incident_desc,city,country,weather_report) VALUES ($1,$2,$3,$4) RETURNING *", [incident_desc, city, country, weatherReport[0]], (error, response) => {

      if (error) {
        return res.status(400).json({
          success: false,
          message: error.message
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Incident created successful",
          incident: response.rows
        });
      }

    });




  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error
    });
  }
});



module.exports = router;
