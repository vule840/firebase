import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyAfllZlZx9bF6ubF8QHgXJxVrRF6WJL09Y",
    authDomain: "testing-39571.firebaseapp.com",
    databaseURL: "https://testing-39571.firebaseio.com",
    projectId: "testing-39571",
    storageBucket: "testing-39571.appspot.com",
    messagingSenderId: "1007988683941",
    appId: "1:1007988683941:web:110ad0273da0e26714094c"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.firestore()

