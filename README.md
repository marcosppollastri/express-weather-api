# ![Open Weather](https://raw.githubusercontent.com/bugsounet/MMM-Weather/master/logo.png)


# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run dev` to start the local server

# Code Overview

## Enviroment Variables
You will need the following enviroment variable setted in an .env file or within your current terminal:
```
OPEN_WEATHER_API_KEY=yourapikey
```
To get your Open Weather API Key please sign up to their service [here.](https://home.openweathermap.org/users/sign_up)

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for the api services.
- `src/routes/` - This folder contains the route definitions for our API.
- `src/controllers/` - This folder contains the controller definitions.
- `src/services/` - This folder contains the services that will be used across the controllers.
- `src/middleware/` - This folder contains the middleware definitions used in the API. Things like the error handling for example.


## Error Handling

In `src/middleware/errorHandler`, we define an error-handling middleware to be used across all the routes. This middleware will respond with an status code defined by the `errors/codes.json` dictionary or an standard 500 interanl error if it's unmapped or unexpected.

