import firebase from 'firebase/app';
import config from '../firebase.json';
import "firebase/auth";
import "firebase/firestore";


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const Auth = app.auth();


export const login = async ({ email, password }) => {
    const {user} = await Auth.signInWithEmailAndPassword(email, password);
    return user;
};

export const signup = async ({ email, password }) => {
    const {user} = await Auth.createUserWithEmailAndPassword(email, password);
    return user;
};

const firestore = firebase.firestore();
export {firestore};

/* import firebase from 'firebase/app';
import config from '../firebase.json';
import "firebase/auth";
import "firebase/firestore";




const app = firebase.initializeApp(config);

const Auth = app.auth();


export const login = async ({ email, password }) => {
    const {user} = await Auth.signInWithEmailAndPassword(email, password);
    return user;
};

export const signup = async ({ email, password }) => {
    const {user} = await Auth.createUserWithEmailAndPassword(email, password);
    return user;
};
 */