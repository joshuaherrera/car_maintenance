import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


//file containing firebase functions
//NOTE: create rules to secure data through firebase since API key must exist
//in the front end.
const config = {
    apiKey: "AIzaSyBjkW1A2jrL6FEc-k19u1CrznjaTC6FMnA",
    authDomain: "vm-app-89158.firebaseapp.com",
    databaseURL: "https://vm-app-89158.firebaseio.com",
    projectId: "vm-app-89158",
    storageBucket: "vm-app-89158.appspot.com",
    messagingSenderId: "490011681255"
  };

  class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // api for auth

    doCreateUserWithEmailAndPassword = (email, pass) =>
      this.auth.createUserWithEmailAndPassword(email, pass);

    doSignInWithEmailAndPassword = (email, pass) => 
      this.auth.signInWithEmailAndPassword(email, pass);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = pass => 
      this.auth.currentUser.updatePassword(pass);

    doSendEmailVerification = () =>
      this.auth.currentUser.sendEmailVerification({
        url: 'http://localhost:3000', //change to domain when hosted
      }
      );

    //merge auth and db user api
    onAuthUserListener = (next, fallback) => 
      this.auth.onAuthStateChanged(authUser => {
        if(authUser) {
          this.user(authUser.uid)
            .once('value')
            .then(snapshot => {
              const dbUser = snapshot.val();

              //default empty roles
              if (!dbUser.roles) {
                dbUser.roles = {};
              }

              //merge auth and db user
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser,
              };

              next(authUser);
            });
        } else {
          fallback();
        }
      });

    //api for user
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

  }

  export default Firebase;