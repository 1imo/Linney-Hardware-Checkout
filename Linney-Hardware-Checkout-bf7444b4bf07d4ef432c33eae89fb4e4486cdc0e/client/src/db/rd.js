// import React from 'react';
// import { createContext } from 'react';
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, get, set, child, remove, onValue, onChildChanged } from "firebase/database"


// const firebaseConfig = {
//     apiKey: "AIzaSyBxMxWBVXHCkVHFtuK_ZJ5EazE63xtLBYc",
//     authDomain: "hours-9e697.firebaseapp.com",
//     databaseURL: "https://hours-9e697-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "hours-9e697",
//     storageBucket: "hours-9e697.appspot.com",
//     messagingSenderId: "533018742179",
//     appId: "1:533018742179:web:d27eee009f2ecb44379e16",
//     measurementId: "G-SB1CS36B46"
//   };

  

// const app = initializeApp(firebaseConfig);
// const db = getDatabase()
// const dbref = ref(db)


// const rd = createContext();

// export function rdHandler(props) {

//     const checkOrgCode = (orgCode) => {
//     }

//     const Context = {
//         checkOrgCode,
//     }

//     return <rd.Provider value={Context}>
//         {props.children}
//     </rd.Provider>
// }

// export default rd