import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjzF-jiPqWj3-7LeB91pxKPxXC9AWMQFs",
  authDomain: "boomrayz.firebaseapp.com",
  projectId: "boomrayz",
  storageBucket: "boomrayz.appspot.com",
  //   messagingSenderId: "154867934018",
  appId: "1:154867934018:web:77e06e4e39faf2c8c21edb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
