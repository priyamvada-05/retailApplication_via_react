import { takeLatest, put, all, call} from 'redux-saga/effects';
import { auth, createUserProfileDocument} from '../../firebase-config/firebaseConfig';
import firebase from 'firebase/app';
import { successSigninWithGoogle, errorSigninWithGoogle, 
	successSigninWithEmailAndPassword, errorSigninWithEmailAndPassword} from './userAction';

function* listenToAuthSignInWithGoogle(){

	yield takeLatest('START_SIGN_IN_WITH_GOOGLE', signInWithGoogle)
}

function* listenToAuthSignInWithEmailAndPassword(){

	yield takeLatest('START_SIGN_IN_WITH_EMAIL_AND_PASSWORD', signInWithEmailAndPassword)
}

function* signInWithEmailAndPassword( { payload }){
	const { email, password}=payload;

	try{
		const {user}= yield auth.signInWithEmailAndPassword(email, password);
		yield put(successSigninWithEmailAndPassword({
			id:user.uid,
			email:user.email,
			name:user.displayName
		}))
	}
	catch(err){
		yield put(errorSigninWithEmailAndPassword(err.message))
	}
}

function* signInWithGoogle(){
	try{
	const googleProvider= new firebase.auth.GoogleAuthProvider();
	googleProvider.setCustomParameters({ prompt: 'select_account'});
	const user= yield auth.signInWithPopup(googleProvider);

	const userInfo=user.additionalUserInfo.profile;
	const userDocumentRef = yield call(createUserProfileDocument, userInfo);
	const userDocumentSnapshot= yield userDocumentRef.get();

	yield put(successSigninWithGoogle({
		id: userDocumentSnapshot.id,
		email: userDocumentSnapshot.data().email,
		name: userDocumentSnapshot.data().name
	}))
}

catch(err){
	yield put(errorSigninWithGoogle(err))
}
}




export default function* userSaga(){
	yield all([call(listenToAuthSignInWithGoogle), call(listenToAuthSignInWithEmailAndPassword)])
}