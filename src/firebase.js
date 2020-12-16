import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAAcpR9PQb-fpESMKIh5YOaMLfxiEw60Vk",
  authDomain: "todo-app-ab574.firebaseapp.com",
  projectId: "todo-app-ab574",
  storageBucket: "todo-app-ab574.appspot.com",
  messagingSenderId: "263223513399",
  appId: "1:263223513399:web:21592c760ab49037ec0ab2",
  measurementId: "G-B3T6P2VQR7",
});

const db = firebaseApp.firestore();

export default db;
