const express = require('express');
const app = express();
const portNumber = 1000;

app.listen(portNumber, () => {
    console.log('Welcome to nodejs !');
    console.log(`Go to http://localhost:${portNumber} to view the app.`)
});

app.get('/' , (request, response) => {
    console.log('Welcome');
    response.send('Welcome User')
});

app.get('/home' , (request, response) => {
    console.log('Home');
    response.send('Welcome to the Homepage of nodejs')
});

app.get('/introduction' , (request, response) => {
    console.log('Introduction');
    response.send('Node.js is an open source server environment , it allows you to run JavaScript on the server.')
});

app.get('/helpdesk' , (request, response) => {
    console.log('Helpdesk');
    response.send('for any queries regarding js node please refer to the contact information')
});

app.get('/contact' , (request, response) => {
    console.log('Contact');
    response.send('Mobile :+91 7037915851 , Office :01232 228848 ')   
});

app.get('/conclusion' , (request, response) => {
    console.log('Conclusion');
    response.send('Thank you for visiting the page . Your feedback is highly valued ')
});