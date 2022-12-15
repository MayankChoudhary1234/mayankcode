const express = require('express');
const app = express();
const portNumber = 8080;

app.listen(portNumber, () => {
    console.log('First Project has started!');
    console.log(`Go to http://localhost:${portNumber} to view the app.`)
});

app.get('/' , (request, response) => {
    console.log('Welcome');
    response.send('Welcome to the First Project ...')
});

app.get('/home' , (request, response) => {
    console.log('Home');
    response.send('I am missing my home so badly , wanna go home soon :( ...')
});

app.get('/contact' , (request, response) => {
    console.log('contact');
    response.send('7037915851...')
});

app.get('/about' , (request, response) => {
    console.log('about');
    response.send('My name is Mayank Choudhary , from ghaziabad and graduated from SRM UNIVERSITY (NCR CAMPUS) and starting my carrer as an associate analyst in Deloitee USI (Bengaluru)...')
});

app.get('/conclusion' , (request, response) => {
    console.log('conclusion');
    response.send('Thank you for visiting the page, Have a nice day :)')
});