# Reportly

<p align="center">
    <a href="https://reportlyapi.herokuapp.com">
        <p align="center">Reportly (version 1.0.0)</p>
    </a>
    
</p>

<p align="center">
    An API for Creating and Listing Incident.
</p>

<p align="center">
    This repository consists of a <strong>NodeJs Application</strong> built with <strong>ExpressJS, and Postgres</strong> 
</p>

<p align="center">
    <p align="center">Application Features</p>
</p>


## Features

- Provides incident reports with the weather information of the location

## Utilities

-<b>The Open Weather Map API</b>

-<b>Postgres Database</b>


## Packages

- `bcrypt`
- `cors`
- `express`
- `pg`
- `axios`
- `morgan`



## Getting Started

<p>Clone the repo and install the packages in the right folder.</p>
<code>npm install</code>

<p>Import the sql file in the <b>datafile</b> directory into your preferred postgres database</p>

## Routes
<code>

   <ul>
    <li>
        <p><b>Get all incidents report</b><p>
        <p>GET - https://reportlyapi.herokuapp.com/reportly/api/v1/incidents
        <p>
    </li>
    <li>
        <p><b>Get an incident report by id</b><p>
        <p>GET - https://reportlyapi.herokuapp.com/reportly/api/v1/incident/1
        <p>
    </li>
    <li>
        <p><b>Create an incident report</b><p>
        <p>POST - https://reportlyapi.herokuapp.com/reportly/api/v1/incident
        </p>
        <p> 
           body     
           {
            "incident_desc":"string", 
            "city":"string", 
            "country":"string"
            }
        </p>    
    </li>


   </ul>

</code>

## Response

<code>
    -GET     https://reportlyapi.herokuapp.com/reportly/api/v1/incidents

    [{
          success: true,
          message: "Successful",
          incidents: [
                    {
            "client_id": "1",
            "incident_desc": "Dems Break Dance Competition",
            "city": "Accra",
            "country": "Ghana",
            "date": "2022-09-08T23:00:00.000Z",
            "weather_report": {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        },
          ]
    }]


    -GET     https://reportlyapi.herokuapp.com/reportly/api/v1/incident/1

    {
        "success": true,
        "message": "Successful",
        "incident": {
            "client_id": "1",
            "incident_desc": "Dems Break Dance Competition",
            "city": "Accra",
            "country": "Ghana",
            "date": "2022-09-08T23:00:00.000Z",
            "weather_report": {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        }
    }


    -POST      https://reportlyapi.herokuapp.com/reportly/api/v1/incident


        [{
          success: true,
          message: "Successful",
          incidents: [
                    {
            "client_id": "1",
            "incident_desc": "Dems Break Dance Competition",
            "city": "Accra",
            "country": "Ghana",
            "date": "2022-09-08T23:00:00.000Z",
            "weather_report": {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        },
          ]
    }]



</code>











