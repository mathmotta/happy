import express, { request, response } from 'express';

const app = express();

app.post('/users', (request, response) => {
    return response.json({message: 'hi'});
});

app.listen(3333);