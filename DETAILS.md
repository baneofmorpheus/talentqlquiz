# Design /Implementation

The api is built using node and express js and is structured using a partial MVC pattern. Since we don't need models we have the route accepting requests and passing to the controller and then the controller handles the request and returns a response to the client.
I used express-rate-limit package to restrict calls to the api per ip and express-validator to validate the expected query param (dob)

# How it works

Clone the repo and run 'npm install'
Run 'npm run dev' to start the app locally

Send a get request to http://localhost:{PORT}/howold?dob={TIMESTAMP} where PORT is the port the app is running on and TIMESTAMP is a valid date timestamp e.g 870994800000
