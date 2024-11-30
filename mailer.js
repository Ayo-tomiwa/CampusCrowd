const mailjet = require ('node-mailjet')
  .connect('your_mailjet_api_key', 'your_mailjet_secret_key');

function sendEmail(to, subject, textContent) {
  const request = mailjet
    .post("send")
    .request({
      Messages: [
        {
          From: {
            Email: "your_email@domain.com",
            Name: "CampusCrowd"
          },
          To: [
            {
              Email: to
            }
          ],
          Subject: subject,
          TextPart: textContent,
          HTMLPart: `<p>${textContent}</p>`,
        }
      ]
    });

  request
    .then(result => console.log('Email sent:', result))
    .catch(err => console.log('Email sending failed:', err));
}
