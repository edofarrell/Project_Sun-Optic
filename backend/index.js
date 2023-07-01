import express from 'express';
import cors from 'cors';

const app = express();

// This line adds the CORS middleware to our Express application, enabling CORS for all routes. 
// It ensures that our server can handle requests from different origins.
app.use(cors());

// This line adds the built-in JSON body parser middleware to our Express application. 
// It allows our server to parse incoming request bodies with JSON payloads and make them available in req.body as a JavaScript object.
app.use(express.json());

app.listen(process.env.PORT || 5000, () => console.log('Server up and running...'));