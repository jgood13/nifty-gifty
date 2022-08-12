

const deleteRegistryGift = async (event) => {
  console.log(document.getElementById("theId").getAttribute("data-registryid"));
  // event.preventDefault();
  const id = event.target.dataset.postid;
  const registryid = document
    .getElementById("theId")
    .getAttribute("data-registryid");
  console.log(registryid);

  const response = await fetch(`/api/registrygift/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(`/registry/${registryid}`);
  } else {
    alert("Failed to delete the post!");
  }
};

const sendEmail = async () => {
  
  const response = await fetch(`/api/registrygift/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace(`/registry/${registryid}`);
  } else {
    alert("Failed to delete the post!");
  }
};


// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'josephgood8@gmail.com', // Change to your recipient
//   from: 'niftygiftyemail@gmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

