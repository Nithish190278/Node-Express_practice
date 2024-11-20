// const express = require('express')
// const app = express();
// app.get('',function(req,res){
//     res.send('hello world')
// })
// app.listen(3000,()=>{

//     console.log("server is rinnung......")
// })

/* Handling HTTP Requests


    HTTP methods

        GET, POST, PUT, DELETE, etc.

*/
// Handling a GET request
// const express = require('express');
// const app = express();


// Handling a GET request for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, GET request!');
// });

 // Handling a GET request for /about
// app.get('/about', (req, res) => {
//   res.send('About Us');
// });

// app.listen(3000, () => {
//   console.log(`Server is running.....`);
// });

// Handling a POST request

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Parse incoming JSON requests
// app.use(bodyParser.json());

// // Handling a POST request for /submit
// app.post('/submit', (req, res) => {
//   const data = req.body;
//   res.json({ message: 'Data received successfully', data });
// });

// app.listen(3030, () => {
//   console.log(`Server is running .....`);
// });

// Middleware Handling
// const express = require('express');
// const app = express();


// app.use((req,res,next)=>{

//     if(10< 20){
//         next()
//     }
// })

// app.get('/', (req, res) => {
//     res.send('Hello');
//   });

// app.get('/Home', (req, res) => {
//   res.send('Hello, this is home page');
// });

// app.get('/about', (req, res) => {
//   res.send('About Us');
// });

// app.listen(3000, () => {
//   console.log(`Server is running.....`);
// });



const express = require('express');
const app = express();

const firstHandler = ((req,res,next)=>{
    if(10 < 20){
        next()
    }
})

const secondtHandler = ((req,res,next)=>{
    if(10 > 40){
        next()
    }
    else{
        console.log("Sorry you are not allowed ")
    }
})

const thirdHandler = ((req,res,next)=>{

    if(50 < 20){
        next()
    }
})
app.get('/', firstHandler,(req, res) => {
    res.send('Hello');
  });

app.get('/Home', secondtHandler,(req, res) => {
  res.send('Hello, this is home page');
});

app.get('/about', thirdHandler,(req, res) => {
  res.send('About Us');
});

app.listen(3000, () => {
  console.log(`Server is running.....`);
});