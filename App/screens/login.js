import React, {Component} from 'react';
import { View} from 'react-native';
import { mainStyle } from '../styles/styles';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase/firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const {user, signOut, signInWithGoogle} = this.props;
        return(
            <div>
                {
                    user ? 
                        <p>Hola, {user.displayName}</p>
                    : <p>Por favor, ingresa</p>
                }
                {
                    user? 
                        <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sign in with e-mail</button>
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);