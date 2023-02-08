const express = require('express');

const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

const { getDatabase, ref, get, set, child, remove, onValue, onChildChanged } = require("firebase/database")
const  { getFirestore, query, getDocs, collection, where, addDoc, doc, setDoc, updateDoc} = require("firebase/firestore");
const multer  = require('multer')
const cors = require('cors');
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
  
  function genCode() {
    for (let i = 0; i < 6; i++) {
      code.push(chars[Math.round(Math.random() * (chars.length - 1))])
    }

    db.collection('organisations').where('code', "==", code.join("")).get().then(querySnapshot => {
      let data = querySnapshot.docs.map(doc => doc.data())

      if (data.length >= 1) {
        code = []
        genCode()
      }
    })
  }
  genCode()

  db.collection("organisations").add({
    code: code.join(''),
    name: req.body.name,
  })

  res.sendStatus(200)
})

app.post("/codeCheck", upload.none(), (req, res) => {

  // const orgUserRef = db.collection('organisations').doc()

  db.collection("organisations").where("code", "==", req.body.code).get().then(querySnapshot => {
    let data = []
    querySnapshot.docs.map(doc => {
      data.push(doc.data())
      console.log(doc.id)
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
      console.log(doc.id)
      id = doc.id
    })
    db.collection("users").where("uid", "==", req.body.uid).get().then(querySnapshot => {
      let userData = []
      userId = ""
      querySnapshot.docs.map(doc => {
        userData.push(doc.data())
        userId = doc.id
      })
      // console.log(userData)
      addDoc(collection(db, "organisations/" + id + "/users"), {
        uid: userData[0].uid,
        usersName: userData[0].name,
        email: userData[0].email,
      });
      // setDoc(collection(db, "users/" + userId + "/") , {
      //   company: data[0].name
      // }, {merge: true})

      let tempref = doc(db, "users/" + userId)
      updateDoc(tempref, { company: data[0].name }).then(() => {
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



app.listen(8080)