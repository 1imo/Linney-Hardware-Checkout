import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../utils/db/index.js"
// import { getSession } from 'next-auth/client'
// import simplecrypt from "simplecrypt";
import bcrypt from "bcryptjs";

// import { addDoc } from "firebase-admin" 




export const authOptions = {
  // Configure one or more authentication providers
secret: "temp-secret",
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            // console.log("REQ")
            const { email, password } = credentials
            
            const res = await fetch("http://127.0.0.1:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            // console.log(res)

            // db.collection("users").then(querySnapshot => {
            //     let docs = querySnapshot.map(item => {
            //         return item.doc
            //     })
            //     console.log(docs)
            // })
            
            let data = new Promise((resolve, reject) => {
                db.collection('users').where("email", "==", email).get().then(querySnapshot => {
                    console.log("SOMETHING")
                    let arr = []
                    querySnapshot.docs.map(doc => arr.push(doc.data()))
                    console.log(arr)
                    // console.log(sc.decrypt(arr[0].password))
                    
                    if (arr[0].email == email) {
                        bcrypt.compare(password, arr[0].password, (err, match) => {
                            
    
                           if (match) {
                                console.log("CORRECT")
    
                                resolve(arr[0])
                           } else {
                               if (err) {
                                console.log(err)
                               
                            }
                                console.log("INCORRECT")
    
                                resolve(null)
                            }
                        })
                    }
                })
            })

            
            
                
            
            Promise.all([data]).then(async () => {
                
                console.log(await data)
            })
            
            return data ? data : null
            
            

            
            

            
        }
      })
    ],
    
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
        newUser: "/onboarding"
    },
    
}
export default NextAuth(authOptions)