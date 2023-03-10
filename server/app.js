const express = require('express');

const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

const { getDatabase, ref, get, set, child, remove, onValue, onChildChanged } = require("firebase/database")
const  { getFirestore, query, getDocs, collection, where, addDoc, doc, setDoc, updateDoc, getDoc} = require("firebase/firestore");
const multer  = require('multer')
const cors = require('cors');
const client = require('firebase-tools');
const { resolve } = require('styled-jsx/css');
// const querybase = require('querybase')


const upload = multer()


const firebaseConfig = {
    apiKey: "AIzaSyBxMxWBVXHCkVHFtuK_ZJ5EazE63xtLBYc",
    authDomain: "hours-9e697.firebaseapp.com",
    databaseURL: "https://hours-9e697-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hours-9e697",
    storageBucket: "hours-9e697.appspot.com",
    messagingSenderId: "533018742179",
    appId: "1:533018742179:web:d27eee009f2ecb44379e16",
    measurementId: "G-SB1CS36B46"
  };

  

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const dbref = ref(db)

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']



app.post("/createOrganisation", upload.none(), (req, res) => {

  let code = []

 
 
    function generateCode() {
      for (let i = 0; i < 6; i++) {
        code.push(chars[Math.round(Math.random() * (chars.length - 1))])
        // console.log("GEN")
        if (i === 5) {
          db.collection('organisations').where('code', "==", code.join("")).get().then(querySnapshot => {
            let data = querySnapshot.docs.map(doc => doc.data())
      
            if (data.length >= 1) {
              code = []
              generateCode()
            } else {
            
              const addOrg = new Promise((resolve, reject) => {
                
                db.collection("organisations").add({
                  code: code.join(''),
                  name: req.body.name,
                })
                resolve(true)
              })
              addOrg.then(async () => await getUserData()).then(() => addAdmin()).then(res.sendStatus(200)).catch(err => console.log(err))

            }
          })
        }
      }
  
      
  }
    generateCode()
    
  
  
  
  
  
    
  
    let userData = []

  
  const getUserData = async () => {
    
    await db.collection("users").where("uid", "==", req.body.uid).get().then(querySnapshot => {
    
      querySnapshot.docs.map(foc => {
        userData.push(foc.data())
        // userData = foc.data();
       
        let tempRef = doc(db, "users/" + foc.id)
        updateDoc(tempRef, { admin: true, company: req.body.name, code: code.join('') })
        
        return foc.data()
            
      })
    })
  }

  const addAdmin =  () => {
  
      db.collection("organisations").where("code", "==", code.join('')).get().then(querySnapshot => {
       
        querySnapshot.docs.map(loc => {
          
          
          addDoc(collection(db, "organisations/" + loc.id + "/admin/"), {
            user: {...userData[0]}
          })

          return true
          
        })
            
          
      })
  }

      // res.sendStatus(200)
      
  


  
      
  })
  

  
  
 
    


   
    
  

  
  

  

  


app.post("/codeCheck", upload.none(), (req, res) => {

  // const orgUserRef = db.collection('organisations').doc()

  db.collection("organisations").where("code", "==", req.body.code).get().then(querySnapshot => {
    let data = []
    querySnapshot.docs.map(doc => {
      data.push(doc.data())
    })
    if (data.length == 1) {
      res.send(data[0].name)
    } else {
      res.send(false)
    }
  })

})

app.post("/addToGroup", upload.none(), async (req, res) => {
  db.collection("organisations").where("code", "==", req.body.code).get().then(querySnapshot => {
    let data = []
    let id = ""
    querySnapshot.docs.map(doc => {
      data.push(doc.data())
      id = doc.id
    })
    db.collection("users").where("uid", "==", req.body.uid).get().then(querySnapshot => {
      let userData = []
      userId = ""
      querySnapshot.docs.map(doc => {
        userData.push(doc.data())
        userId = doc.id
      })
      
      addDoc(collection(db, "organisations/" + id + "/users"), {
        uid: userData[0].uid,
        usersName: userData[0].name,
        email: userData[0].email,
      });
      

      let tempref = doc(db, "users/" + userId)
      updateDoc(tempref, { company: data[0].name, code: req.body.code }).then(() => {
        res.sendStatus(200)
      })
      
    })
  })
})


app.get("/reach/:id", (req, res) => {
  db.collection("users").where("uid", "==", req.params.id).get().then(querySnapshot => {
    let userData = []
    querySnapshot.docs.map(doc => {
      userData.push(doc.data())
    })

    // console.log(querySnapshot)

      try {
        res.send(userData[0])
      } catch (error) {
        res.send(false)
      }
    
  })

})

app.post("/getOrgData", upload.none(), async (req, res) => {
  

  console.log(req.body)
  let data = []
  let id = ""
  let admins = []
  let users = []

  await db.collection("organisations").where("code", "==", req.body.code).get().then(querySnapshot => {

    querySnapshot.docs.map(docu => {
      data.push(docu.data())
      id = docu.id
    })
    return id
    }).then(async (id) => {
      await db.collection("organisations/" + id + "/admin").get().then(querySnapshot => {
      querySnapshot.docs.map(docu => {
        
        // console.log(docu.data())
        admins.push(docu.data())
      })
      
        return id
        
    })
    }).then(async(id) => {
      await db.collection("organisations/" + id + "/users").get().then(querySnapshot => {
      querySnapshot.docs.map(docu => {
        
        // console.log(docu.data())
        users.push(docu.data())
      })
    })

    

    

    // console.log(data)
    // console.log(admins)
    // console.log(users)
    })
  
  if (admins.length > 0) {
    res.send({admins: admins, users: users})
  } else {
    res.send(false)
  }

  
  // res.sendStatus(200)
})

app.post("/ip", upload.none(), (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})



app.listen(8080)