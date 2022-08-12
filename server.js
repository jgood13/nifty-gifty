const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const nodemailer = require('nodemailer');
require("dotenv").config();

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});


const sess = {
  secret: "semitruck battery",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

app.get('/createregistry',(req,res)=>{
  res.render('createRegistry')
})


app.post('/send', (req, res) =>{
  
  const output = `
  <h1> Nifty Gifty</h1>
  <h2>${req.body.registryName}</h2>
  <ul>
    <li>${req.body.gift1}</li>
    <li>${req.body.gift2}</li>
    <li>${req.body.gift3}</li>
    <li>${req.body.gift4}</li>
    <li>${req.body.gift5}</li>
  </ul>
    `
    

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: req.body, 
//   from: 'niftygiftyemail@gmail.com', 
//   subject: 'Wishlist/Registry',
//   text: '',
//   html: `
//   <h1> Nifty Gifty</h1>
//   <h2>${registryData.name}</h2>
//   <ul>
//   </ul>
//     `,
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

  

    
let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user:'apikey',
    pass: process.env.SENDGRID_API_KEY
  },
  secure:false,
  tls: {
    rejectUnauthorized: false
  }
})
// const handlebarOption = {
//   viewEngine: {
//   extName: '.handlebars',
//   partialsDir: path.resolve('./views'),
//   defaultLayoutL: false
//   },
//   viewPath : path.resolve('./views'),
//   extName: ".handlebars"
// }
// transporter.use('compile', hbs(handlebarOption))
let mailOptions = {
  from: '"Nifty Gifty"<NiftyGiftyEmail@gmail.com>',
  to: req.body.email,
  subject: "Here is my giftlist/registy",
  text: 'test',
  html: output
  }
  transporter.sendMail(mailOptions), function(err,info){
    if (err) {console.log(err)}
    else { console.log('email sent')}
  }
  res.render('homepage')
})