import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCROkn-JVjPuzqasjJUMtsSmzqbjDAtm8",
    authDomain: "challange-1b03e.firebaseapp.com",
    projectId: "challange-1b03e",
    storageBucket: "challange-1b03e.appspot.com",
    messagingSenderId: "497735277929",
    appId: "1:497735277929:web:862c7d78474140091671f8",
    measurementId: "G-86JPMJRRTB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth};
  export default db
  