

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'josephgood8@gmail.com', // Change to your recipient
  from: 'niftygiftyemail@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  

  const hbs2 = require('nodemailer-express-handlebars')
  const nodemailer = require('nodemailer')
  
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'NiftyGiftyEmail@gmail.com',
      pass: 'Firetruck!'
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
  



export const emailRegistry = () => {
  const sendEmail = document.getElementById('sendToEmail').value
  const title = document.getElementById('title').getAttribute('data-title')
  const gifts = document.querySelectorAll('.gifts').getAttribute('data-gifts')
  
console.log(sendEmail, title, gifts)

  let mailOptions = {
    from:"NiftyGiftyEmail@gmail.com",
    to: sendEmail,
    subject: "Here is my giftlist/registy",
    template:'email',
    contest: {
      title: title ,
      gifts: gifts
    }
  }


}

