import db from "../../utils/db/index.js"

export default function handler(req, res) {
    console.log(req.body)

    if (req.body.type == "user") {
        if (req.body.email) {
            db.collection("users").where("email", "==", req.body.email).get().then(query => {
                // let arr = []
                query.docs.map(item => {
                    // console.log(item.data())
                    // res.send("HIT")
                    // console.log("HIT")
                    let obj = {
                        name: [item.data().firstName, item.data().lastName],
                        email: item.data().email
                    }
                    return res.send(obj)
                })
            })
        } else {
            return res.send(200)
        }
        
    } 

    // res.send(200)
}