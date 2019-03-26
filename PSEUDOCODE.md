Step 1
- Install express by yarn add express - Done
- get our package by const express = require('express') - Done
- express returns server object 
- all the methods we are going to use off the server are built into express not node

Step 2
- Get the server to listen - Done 

Step 3 ** GET METHOD ENDPOINTS **
Handle get request to our roots. Get takes endpoints and a callback 
- create endpoint to get all users contained in db - done
    - make a call to the db - done
    - two cases - either we are finding a user or not
    in both cases we are sending a status and response every time 
- create endpoint to get a user by id (same as above but find by id)- done
- Throw an error if a user is not defined - done

Step 4 ** POST METHOD ENDPOINTS **
POST allows us to add data to the db hence why more complicated than GET
I'll be using POSTMAN to test this request. POSTMAN is a tool for sending requests. It allows us to send requests to servers including mobile
- Use a json parser middleware server.use(express.json());- Done
- If the information about the user is valid:
save the new user the the database.
return HTTP status code 201 (Created).
return the newly created user document. - Done

Step 4 ** DELETE METHOD ENDPOINTS **
When the client makes a DELETE request to /api/users/:id:

If the user with the specified id is not found:
return HTTP status code 404 (Not Found). - Done
return the following JSON object: { message: "The user with the specified ID does not exist." }. - Done
If there's an error in removing the user from the database:
cancel the request.
respond with HTTP status code 500.
return the following JSON object: { error: "The user could not be removed" }. - Done

Step 5 ** UPDATE METHOD ENDPOINTS **
When the client makes a PUT request to /api/users/:id:
If the user with the specified id is not found:
return HTTP status code 404 (Not Found). - Done
return the following JSON object: { message: "The user with the specified ID does not exist."} - Done

If the request body is missing the name or bio property:
cancel the request. respond with HTTP status code 400 (Bad Request). - Done
return the following JSON response: { errorMessage: "Please provide name and bio for the user." }. - Done

If there's an error when updating the user
cancel the request. respond with HTTP status code 500. - Done
return the following JSON object: { error: "The user information could not be modified." }. - Done

If the user is found and the new information is valid:
update the user document in the database using the new information sent in the reques body.- Done
return HTTP status code 200 (OK). - Done
return the newly updated user document. - Done