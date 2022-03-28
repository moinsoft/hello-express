const router = require('express').Router();
const {homeController, aboutController, productsController, contactController} = require('./controller');

router.get('/', homeController);



// router.get('/about', localMiddleware, (req, res) => {

//   // res.send('<h1>This is About Route.</h1>');


//   fs.readFile('./pages/about.html', (err, data) => {

//     if (err) {
//       console.log('Error', err);
//       res.send('<h1>Something went wrong.</h1>');
//     } else {
//       res.write(data)
//       res.end();
//     }

//   })

// })


router.get('/about', aboutController);



router.get('/products', productsController);



router.get('/contact', contactController);



module.exports = router