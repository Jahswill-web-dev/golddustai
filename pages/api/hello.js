// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const dotenv = require('dotenv');
// dotenv.config();

const pass = process.env.PASS;
const email = process.env.EMAIL;
const host = process.env.HOST;

let nodemailer = require('nodemailer');
export default async function handler(req, res){
  
  const transport = nodemailer.createTransport({
    port: 465,
    host: "fast.3secureserver.xyz",
    auth: {
      user: email,
      pass,
    },
    secure: true,
  });

 const mailData = {
    from: email,
    to:email,
    replyTo:`${req.body.email}`,
    subject: `Message From ${req.body.name}`,
   }

    try{
      await transport.sendMail({
        ...mailData,
        html:`
        <p>Name:${req.body.name}</p>
        <p>Email:${req.body.email}</p>
        <p>Budget:${req.body.budget}</p>  
        <p>Message:${req.body.message}</p>
        `,
      });

      console.log("Email sent successfully");
    return res.status(200).json({ message: "Email sent" });
    } catch(error){
      console.log(error)
      return res.status(500).json({message: error.message})
    }

}





// export default function handler(req, res) {
//   if(req.method === "POST"){
//     console.log(req.body);
//   }else{
//     console.log("method not accepted");
//   }
  
//   res.status(200).json({ name: 'John Doe' })
// }
