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
 	const userRef= await firebase_db.doc(`user/${userInfo.id}`);
 	const userSnapshot= await userRef.get();
   /* console.log('firebase userRed')
    console.log(userRef)
    console.log('firebase userSnapshot')
    console.log(userSnapshot)
    console.log('firebase additionalInfo')
    console.log(additionalInfo)*/


 	if(!userSnapshot.exist){

 		const date=new Date();

 		try{
 			await userRef.set({
	 			name: additionalInfo || userInfo.name,
	 			email:userInfo.email,
	 			createdAt: date,
        //...additionalInfo
 		})
 		}
 		catch(err){
 			console.log(err)
 		}
 		return userRef;
 	}
 }
 } 

 export const createCollectionAndDocument = (collection_key, dataArray)=>{
     const collectionRef= firebase_db.collection(collection_key);
     
     //const batch = firebase_db.batch();

     dataArray.forEach((data)=>{
         const docRef=collectionRef.doc();
         docRef.get().then(snapshot=>{
             if(!snapshot.exist){
                 docRef.set({title: data.title})
                 const itemsCollectionRef = firebase_db.collection(`${collection_key}/${snapshot.id}/items`);
                 const items= data.items;
                 items.forEach((item)=>{
                     const itemDocRef = itemsCollectionRef.doc();
                     itemDocRef.get().then(snapshot=>{
                         if(!snapshot.exist){
                             itemDocRef.set({ ...item})
                         }
                     })

                 })

             }

         })
        /* const docSnapshot= docRef.get();
         console.log('snapshot');
         console.log(docSnapshot);
         if(!docSnapshot.exist){
 
}

         const collectionRefItems=firebase_db.collection('/shopData/')*/
     })

     //return batch.commit();


 }

export const takeCollectionSnapshotAndStoreData= async (collectionSnapshot)=>{
    const docsSnapshot = await collectionSnapshot.docs;
    const newData=  docsSnapshot.map(async (docSnapshot)=>{
         const {title}=  docSnapshot.data();
         const itemsCollectionRef=await  firebase_db.collection(`${docSnapshot.ref.path}/items`) 
         const items= await takeItemsCollectionSnapshotAndStoreData(itemsCollectionRef);

         return ({
             id:docSnapshot.id,
             title,
             items:items,
             routeName:title.toLowerCase()
         })
        /* itemsCollectionRef.get().then((itemsCollectionSnapshot)=>{
             const itemsDocumentSnapshot= itemsCollectionSnapshot.docs;
             const newItemData= itemsDocumentSnapshot.map(docSnapshot=>{
             return({
                 id:docSnapshot.id,
                 ...docSnapshot.data()
             })
                      })

             const obj={
             id:docSnapshot.id,
             title,
             items:newItemData,
             routeName:title.toLowerCase()
             }
         })*/
         
         


    })
    return newData
    }        

 /*export const takeCollectionSnapshotAndStoreData= async (collectionSnapshot)=>{
     const docsSnapshot = collectionSnapshot.docs;
     const newData=docsSnapshot.map(async (docSnapshot)=>{
         const {title}= docSnapshot.data();
         const itemsCollectionRef= firebase_db.collection(`${docSnapshot.ref.path}/items`)
         console.log('this is takeCollectionSnapshotAndStoreData');
         const itemsCollectionSnapshot=await itemsCollectionRef.get();
       const itemsDocumentSnapshot= await itemsCollectionSnapshot.docs;
         const itemsData= itemsDocumentSnapshot[0].data();

         return({
             id:docSnapshot.id,
             title,
             items: itemsData
             })
     })
     return newData
 }*/

//const newShopData={};

export const takeItemsCollectionSnapshotAndStoreData= async (collectionRef)=>{
    const collectoinSnapshot = await collectionRef.get()
    const itemsDocumentSnapshot= await collectoinSnapshot.docs;

     const newItemData= await itemsDocumentSnapshot.map(docSnapshot=>{
     return({
         id:docSnapshot.id,
         ...docSnapshot.data()
     })
              })

     return newItemData
   
}
const googleProvider= new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

