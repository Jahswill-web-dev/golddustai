// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const dotenv = require('dotenv');
// dotenv.config();
const pass = process.env.PASS;
const email = process.env.NEMAIL;
let nodemailer = require('nodemailer');
// export default async function handler(req, res){
  
//   const transport = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: email,
//       pass,
//     },
//     secure: true,
//   });

//  const mailData = {
//     from: email,
//     to:email,
//     subject: `Message From ${req.body.name}`,
//     html: <div>{req.body.message}</div>
//    }

//     try{
//       await transport.sendMail({
//         ...mailData,
//         html:"<h1>this is a test</h1>",
//         phone: req.body.phone,
//       });
//       console.log("Email sent successfully");
//     return res.status(200).json({ message: "Email sent successfully" });
//     } catch(error){
//       console.log(error)
//       return res.status(400).json({message: error.message})
//     }

  //  transport.sendMail(mailData, function (err, info) {
  //   if(err)
  //     console.log(err)
  //   else
  //     console.log(info)
  // })


//   console.log(req.body)
// }





export default function handler(req, res) {
  if(req.method === "POST"){
    console.log(req.body);
  }else{
    console.log("method not accepted");
  }
  
  res.status(200).json({ name: 'John Doe' })
}
