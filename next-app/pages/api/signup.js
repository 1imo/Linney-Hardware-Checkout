// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../utils/db/index.js"
// import simplecrypt from "simplecrypt";
import bcrypt from "bcryptjs"




export default function handler(req, res) {

  let encPwd = bcrypt.hashSync(req.body.pass, 10)

  // let encryptedPass = sc.encrypt(req.body.pass)
  db.collection("users").add({
    email: req.body.email,
    password: encPwd
  })
  res.send(200)
  // console.log(req.body)
}
