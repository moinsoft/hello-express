const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());



app.get('/', (req, res) => {

  // res.send('Hello Moin Uddin');
  
  // res.json({
  //   message: 'Hello World'
  // })
    
    
  
  // res.send(

  //   `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //       <meta charset="UTF-8">
  //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
  //       <title>NodeJS is Awesome</title>
      
  //       <style>
      
  //         *{
  //           margin: 0;
  //           padding: 0;
  //           box-sizing: border-box;
  //         }
      
  //         body{
  //           font-family: Arial, Arial, Helvetica, sans-serif;
  //           font-size: 1rem;
  //         }
      
  //         .container{
  //           width: 50%;
  //           margin: 2rem auto;
  //           padding: 2rem;
  //           background: #dddeee;
  //         }
      
  //       </style>
      
  //     </head>
  //     <body>
      
  //       <div class="container">
      
  //         <h1>Hello NodeJS, You Are Awesome</h1>
      
  //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur iste laboriosam id amet atque quaerat cum vel similique praesentium inventore porro cupiditate reprehenderit repudiandae unde earum assumenda, eum eveniet deleniti in et alias. Expedita recusandae nulla dolorum necessitatibus minus cumque soluta quibusdam facilis. Impedit illum nobis harum ab eos!</p>
      
  //       </div>
        
  //     </body>
  //     </html>

  //   `

  // );



  // res.send('<h1>This is Root Route.</h1>');


  fs.readFile('./pages/index.html', (err, data) => {

    if (err) {
      console.log('Error', err);
      res.send('<h1>Something went wrong.</h1>');
    } else {
      res.write(data)
      res.end();
    }

  })

})



app.get('/about', (req, res) => {

  // res.send('<h1>This is About Route.</h1>');


  fs.readFile('./pages/about.html', (err, data) => {

    if (err) {
      console.log('Error', err);
      res.send('<h1>Something went wrong.</h1>');
    } else {
      res.write(data)
      res.end();
    }

  })

})



app.get('/products', (req, res) => {

  // res.send('<h1>This is Products Route.</h1>');



  fs.readFile('./pages/products.html', (err, data) => {

    if (err) {
      console.log('Error', err);
      res.send('<h1>Something went wrong.</h1>');
    } else {
      res.write(data)
      res.end();
    }

  })

})



app.get('/contact', (req, res) => {

  // res.send('<h1>This is Contact Route.</h1>');


  fs.readFile('./pages/contact.html', (err, data) => {

    if (err) {
      console.log('Error', err);
      res.send('<h1>Something went wrong.</h1>');
    } else {
      res.write(data)
      res.end();
    }

  })

})








app.listen(4000, () => {

  console.log('Server is listening on PORT 4000');

})

