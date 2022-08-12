const router = require("express").Router();
const path = require("path");

const {
  Registry,
  RegistryGift,
} = require("../../models");
const hbs2 = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer');
const { Router } = require("express");

router.post('/send', (req, res) =>{
  let email = req.body
  console.log(email)

  const registryData = Registry.findByPk(1);
  const giftData =  RegistryGift.findAll({
    where: {registry_id: '1'}
  });
  // const output = `
  // <h1> Nifty Gifty</h1>
  // <h2>${registryData.name}</h2>
  // <ul>
  //   <li>${giftData.gift[0]}</li>
  //   <li>${giftData.gift[1]}</li>
  //   <li>${giftData.gift[2]}</li>
  //   <li>${giftData.gift[3]}</li>
  //   <li>${giftData.gift[4]}</li>
  // </ul>
  //   `
    

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
    user:'NiftyGiftyEmail@gmail.com',
    pass: 'Firetruck!'
  },
  secure:false,
  tls: {
    rejectUnauthorized: false
  }
})
const handlebarOption = {
  viewEngine: {
  extName: '.handlebars',
  partialsDir: path.resolve('./views'),
  defaultLayoutL: false
  },
  viewPath : path.resolve('./views'),
  extName: ".handlebars"
}
transporter.use('compile', hbs2(handlebarOption))
let mailOptions = {
  from:"NiftyGiftyEmail@gmail.com",
  to: email,
  subject: "Here is my giftlist/registy",
  template:'email',
  context: {
    title: registryData ,
    gifts: giftData,
    }
  }
  transporter.sendMail(mailOptions), function(err,info){
    if (err) console.log(err)
    else { console.log('email sent')}
  }
  res.render('/registry/1')
  document.location.replace(`/registry/1`)
})

module.exports = router