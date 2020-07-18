import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyCNkFrS_Az_J3V78n7TJdJHgNoZHzMNfUM",
  authDomain: "burgerqueen-efdb5.firebaseapp.com",
  databaseURL: "https://burgerqueen-efdb5.firebaseio.com",
  projectId: "burgerqueen-efdb5",
  storageBucket: "burgerqueen-efdb5.appspot.com",
  messagingSenderId: "281844651012",
  appId: "1:281844651012:web:f9add6240467d4c9e41151",
  measurementId: "G-VJQK4407WW"
};
app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
export { db, auth }

