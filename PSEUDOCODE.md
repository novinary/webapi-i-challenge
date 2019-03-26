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