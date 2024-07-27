// import { initializeApp } from "firebase/app";
// import{getAuth} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyBTvYSIbQhPJK6tmSKd7mC1yvbMYsUwIVM",
//   authDomain: "fir-auth-24cfa.firebaseapp.com",
//   projectId: "fir-auth-24cfa",
//   storageBucket: "fir-auth-24cfa.appspot.com",
//   messagingSenderId: "728207710235",
//   appId: "1:728207710235:web:0e892d1ef7562830fcc0be",
//   measurementId: "G-1DH7W5JJK7"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth();

// export { auth , app };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDT8ocqzdrEFkQKfLV1CUBWfa54Fl_qBEA",
  authDomain: "drop-box-8c153.firebaseapp.com",
  projectId: "drop-box-8c153",
  storageBucket: "drop-box-8c153.appspot.com",
  messagingSenderId: "45900324637",
  appId: "1:45900324637:web:d906cc0ae388f9ea2a4bf4",
  measurementId: "G-YV9BR06688"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}