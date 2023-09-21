import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
    const {messageBody} = req.body;
    console.log("teste: ", process.env.EMAIL);
    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: 'joaocidralv@gmail.com',
            to: 'joaocidralv@gmail.com',
            subject: 'Testando envio de email por API',
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }


    res.status(200).json({ message: 'Send Mail' })
}