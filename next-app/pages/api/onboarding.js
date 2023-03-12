
import db from "../../utils/db/index.js"


export default function handler(req, res) {

    console.log(req.body)

    let userId = ""

    db.collection("users").where("email", "==", req.body.email).get().then(query => {
       
        
            
            query.docs.map(item => {
                
                userId = item.id
                db.collection("users").doc(item.id).update({
            firstName: req.body.user.firstName,
            lastName: req.body.user.lastName,
        })
            })
        
        
    })

    if (req.body?.joinCode ? true : false) {

        db.collection("organisations").where("joinCode", "==", req.body.joinCode).get().then(querySnapshot => {
            let arr = []
            let id = ""
            querySnapshot.docs.map(item => {
                arr.push(item.data())
                id = item.id
                console.log("ORG DATA")
                console.log(item.data())
            })

            if (arr.length >= 1) {
                let path = "users/" + userId
                db.collection("organisations/" + id + "/users").add({
                    user: path
                        
                    
                })

                // db.collection("users").doc(userId).update({
                //     orgName: arr[0].company
                // })

                
            } else {
                res.send(false)
            }
        })
        
    } else {
        let numerals = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let code = []
        function genCode() {
            for (let i = 0; i < 6; i++) {
                let position = Math.random() * 36;
                code.push(numerals[Math.round(position)])
            }

            db.collection("organisations").where("joinCode", "==", code.join("")).get().then(querySnapshot => {
                let arr = []
                
                    querySnapshot.docs.map(item => {
                        arr.push(item.data())
                        console.log("ORG DATA")
                        console.log(item.data())
                })
                
                

                if (arr.length >= 1) {
                    code = []
                    genCode()
                } else {
                    
                    db.collection("organisations").add({
                        companyName: req.body.company,
                        joinCode: code.join("")
                    })

                    db.collection("organisations").where("joinCode", "==", code.join("")).get().then(query => {
                        let id = ""
                        let orgData = ""
                        query.docs.map(item => {
                            id = item.id
                            orgData = item.data()

                        })

                        db.collection("users").where("email", "==", req.body.email).get().then(query => {
                            query.docs.map(item => {
                                let path = "users/" + item.id
                                db.collection("organisations/" + id + "/admins").add({
                                        user: path
                                        
                                })
                                
                                // db.collection("users").doc(item.id).update({
                                //     orgName: orgData.company
                                // })

                            })
                        })

                        
                        

                    })
                }
            })
        }

        genCode()
    }
    res.send(true)
    
}