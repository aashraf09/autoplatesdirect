const express = require('express');
const path = require("path");
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser')
const stripe = require('stripe')('sk_test_51GvjE9HigAQWREeEfXJ9HnjZgz1S653LsDmOBulNvNu0TEtpmxrs61JLr3gFORMKSnxXzMQMsvktRzmptzSoZ2Wt00QTrYrHIx')



require("./db/conn");
const Register = require("./models/numberplatemaker");
const { json } = require('body-parser');
//paths
const static_path = path.join(__dirname, "../views");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended: false}))
console.log(path.join(__dirname, "../views")); 
// app.use(express.static())
app.use(express.static(static_path));
app.use(express.static("templates/assets"));
app.use(express.static("templates"));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

//landing page
app.get("/", (req, res) => {
  res.render("index");
})
//about us page
app.get("/about-us", (req, res) => {
  res.render("aboutus");
})
//blog page
app.get("/blog", (req, res) => {
  res.render("blog")
})
//contact us page
app.get("/contact-us", (req, res) => {
  res.render("contactus")
})
//number plate maker page
app.get("/number-plate-maker", (req, res) => {
  res.render("numberplatemaker")
})
//payment page
app.get("/charge", (req, res) => {
  res.render("payment")
})
//success
app.get("/success", (req,res) => {
  res.render("complete")
})

//post api
 app.post("/number-plate-maker", async (req, res) => {
  try {
    //schema
    const registerPlate = new Register({
      registrationNumber: req.body.registrationNumber,
      plateType: req.body.plateType,
      plateStyle: req.body.plateStyle,
      plate: req.body.plate,
      frontPlateSize: req.body.frontPlateSize,
      rearPlateSize: req.body.rearPlateSize,
      plateBorder: req.body.plateBorder,
      slogan: req.body.slogan
    })
    const registered = await registerPlate.save();
    const getPlateLatest = await Register.find().limit(1).sort({ $natural : -1 });
    res.redirect(`/number-plate-maker/${getPlateLatest[0]._id}`)
  } catch(err) {  
     res.status(400).send(err);
     console.log(req.body);
     console.log(res.body)
   }
  //  console.log(document.location.href = `localhost:3000`);
  })

//get all plates

app.get("/number-plate-maker", async (req, res) => {
  try {
    const getPlate = await Register.find();
    res.send(getPlate);
    res.render("numberplatemaker")
  } catch(err) {
    res.send(e);
  }
})

//get plate by ID 
app.get("/number-plate-maker/:id", async (req,res) => {
  
  try {
    const _id = req.params.id;
    const individualPlate = await Register.findById(_id); 
    // res.send(individualPlate);
    res.render('numberplatemaker', individualPlate);    
  } catch(err) {
      res.send(err);  
  }
})

///////
//stripe
app.post('/charge', (req, res) => {
  try {
      stripe.customers.create({
          name: req.body.name,
          email: req.body.email,
          source: req.body.stripeToken
      }).then(customer => stripe.charges.create({
          amount: req.body.amount * 100,
          currency: 'usd',
          customer: customer.id,
          description: 'Thank you for your generous donation.'
      })).then(() => res.render('complete'))
          .catch(err => console.log(err))
  } catch (err) { res.send(err) }
})


app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});