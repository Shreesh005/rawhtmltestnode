const path = require("path");
const express = require("express");
const fs = require("fs");
const port = 3000 ;
const app = express();
// EXPRESS SPECIFIC STUFFS
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFFS
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the view directories

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on internet so far";
    const params = {"title":"This is a title", "content":con};
    res.status(200).render('index.pug',params);
});
app.post('/', (req,res)=>{
    Name = req.body.Name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `The name of the client is ${Name}, ${age} years old , ${gender}, residing at ${address}. More about him/her: ${more}` 
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {"message":"Your form has been submitted successfully"};
    res.status(200).render("index.pug",params);
})
// START THE SERVER
app.listen(port,()=>{  // do not add localhost here if you are deploying it
    console.log("server listening to port "+port);
});