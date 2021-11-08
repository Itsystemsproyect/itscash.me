const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const config = require("config");



const main = async (user) => {

    let date = new Date();
    let mail = {
        "id": user.id,
        "created": date.toString()
    }

    const baseUrl = config.get('baseUrl');

    const token_mail_verification = jwt.sign(mail, config.get("jwt_secret_mail"), { expiresIn: '1d' });

    let url = baseUrl + "verify?id=" + token_mail_verification;

    //let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "mail.itscash.me",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "suport@itscash.me", // generated ethereal user
            pass: "Sistemas123*" // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"Soporte" <suport@itscash.me>', // sender address
        to: user.email, // list of receivers
        subject: "Verificar Cuenta", // Subject line
        text: "Click on the link below to veriy your account " + url, // plain text body        
    });

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = main;
