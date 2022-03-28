const fs = require('fs');


exports.homeController = (req, res) => {

  // const error = new Error('Bad Request');
  // error.status = 404;
  // throw error;

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

};


exports.aboutController = (req, res) => {

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

}
  
  
  
exports.productsController = (req, res) => {

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

}
  
  
  
exports.contactController = (req, res) => {

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

}