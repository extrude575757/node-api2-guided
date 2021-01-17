const express = require('express');

const server = express();

server.use(express.json());

const AdopterRouter = require('../adopters/adopters-router');

const Dog = require('../dogs/dogs-router');

server.use('/api/adopters',AdopterRouter);
server.use('/api/dogs',DogsRouter);


// DOGS ENDPOINTS
// Do WE NEED ANOTHER SERVER HERE AND IT WAS POINTED AS IF THE SERVER CAME FROMT HE ROOT OF THE PROJECT

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
