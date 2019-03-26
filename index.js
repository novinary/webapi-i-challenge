// implement your API here

const express = require("express");

const db = require("./data/db");

const server = express();
const PORT = 4000;

server.use(express.json());

// endpoints

//get all users 
server.get("/api/users", (req, res) => {
    db.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The users information could not be retrieved." });
        });
});

//get users by id
server.get("/api/users/:id", (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res
                    .status(404)
                    .json({ message: "The user with the specified ID does not exist." });
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: "The user information could not be retrieved." });
        });
});

// post user
// create a user using the information sent inside the request body
server.post('/api/users', (req, res) => {
    const user = req.body;
    db
        .insert(user)
        .then((user) => {
            if (user.name && user.bio) {
                res.status(201).json(user);
                console.log('Created User: ', user);
            } else {
                res.status(400).json({ errorMessage: 'Please provide name and bio for the user.' });
                return;
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'There was an error while saving the user to the database' });
        });
});

// delete user
// remove use with specified id and return deleted user

server.delete('/api/users/:id', (req, res) => {
	const id = req.params.id;
	db
		.remove(id)
		.then((user) => {
			if (user) {
				console.log('deleting user with id:', id);
				res.json(id);
			} else {
				res.status(404).json({ message: 'The user with the specified ID does not exist.' });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "The user could not be removed." });
		});
});


// listening
server.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`);
});
