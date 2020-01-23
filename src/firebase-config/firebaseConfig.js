import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD6rFHc2xeEfW-7gyOOnpv9P_Ew1fe2vDQ",
    authDomain: "my-project-react-fed40.firebaseapp.com",
    databaseURL: "https://my-project-react-fed40.firebaseio.com",
    projectId: "my-project-react-fed40",
    storageBucket: "my-project-react-fed40.appspot.com",
    messagingSenderId: "252779089043",
    appId: "1:252779089043:web:9f0696e77eeb9c263ad166"
  };

  firebase.initializeApp(config);

 export const auth= firebase.auth();
 export const firebase_db= firebase.firestore();

 export const createUserProfileDocument= async (userInfo, additionalInfo)=>{

 	if(userInfo){
 	const userRef= await firebase_db.doc(`user/${userInfo.uid}`);
 	const userSnapshot= await userRef.get();

 	if(!userSnapshot.exist){

 		const date=new Date();

 		try{
 			await userRef.set({
	 			name: userInfo.displayName,
	 			email:userInfo.email,
	 			createdAt: date,
        ...additionalInfo
 		})
 		}
 		catch(err){
 			console.log(err)
 		}
 		return userRef;
 	}
 }
 } 

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

