import React from 'react';
import {Button} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '635667764813-od7051jjhgm5s82hkil9c3c873ud2dr0.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
}

export default function GoogleSignIn({navigation}) {
  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress()
          .then((data) => navigation.navigate('Nawodnienie', data))
          .catch((error) => {
            navigation.navigate('Nawodnienie');
            // eslint-disable-next-line no-alert
            alert(error.message);
          })
      }
    />
  );
}
