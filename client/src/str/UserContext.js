import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile, onAuthStateChanged} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, getDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import DevContext from "./DevContext"
import axios from "axios";


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
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const UserContext = createContext();

export function UserContextHandler(props) {

  const DevCtx = useContext(DevContext);
    

  const [user, setUser] = useState(false);
  const [userOrg, setUserOrg] = useState("");
  const [userDetails, setUserDetails] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (res) => {
            if (res) {
              setUser(res)

              // console.log(res)
              const furtherData = await axios.get(`${DevCtx.ip}/reach/${res.uid}`);


              // console.log(furtherData.data)
              setUserDetails(furtherData.data)
            } else {
                setUser(null);
                
            }
        })

        return unsub
    }, [])

  

  

    const setUserHandler = (user) => {
        setUser(user);
        console.log(user)
    }
  
  useEffect(() => {
    if (user) {
      
    }
  }, [user])

    
      
      const googleProvider = new GoogleAuthProvider();
      const signInWithGoogle = async () => {
        try {
          const res = await signInWithPopup(auth, googleProvider);
          const user = res.user;
          console.log(user)
          setUser(user);
         
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const docs = await getDocs(q);
          if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
              uid: user.uid,
              name: user.displayName,
              authProvider: "google",
              email: user.email,
            });
          }
         
        //   navigate("/dashboard");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
      
      const provider = new GithubAuthProvider();
      
      const signInWithGithub = async () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user)
          setUser(user);
        //   navigate("/dashboard");
      
          
      
        }).catch((error) => {
      
          const errorCode = error.code;
          const errorMessage = error.message;
      
          const email = error.customData.email;
      
          const credential = GithubAuthProvider.credentialFromError(error);
        });
      }
      
      const logInWithEmailAndPassword = async (email, password) => {
          try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            console.log(res)
            setUser(res);
        //   navigate("/dashboard");
            
      
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
      };
        

      const registerWithEmailAndPassword = async (name, email, password) => {
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          updateProfile(auth.currentUser, {
            displayName: name
          })
          const userRes = res.user;
          setUser(userRes);
          await addDoc(collection(db, "users"), {
            uid: userRes.uid,
            name,
            authProvider: "local",
            email,
          });
          return 1
        } catch (err) {
          console.error(err);
          alert(err.message);
          return 0
        }
      };
        
      const sendPasswordReset = async (email) => {
          try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset link sent!");
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
      };
        
      const logout = () => {
        signOut(auth);
        setUser(null);
        
      };


    const Context = {
        setUser: setUserHandler,
        user: user,
        userOrg: userOrg,
      setUserOrg: setUserOrg,
      userDetails: userDetails,
        setUserDetails: setUserDetails,
        auth,
        db:db,
        signInWithGoogle: signInWithGoogle,
        signInWithGithub: signInWithGithub,
        logInWithEmailAndPassword: logInWithEmailAndPassword,
        registerWithEmailAndPassword: registerWithEmailAndPassword,
        sendPasswordReset: sendPasswordReset,
        logout: logout,
    }

    return <UserContext.Provider value={Context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;