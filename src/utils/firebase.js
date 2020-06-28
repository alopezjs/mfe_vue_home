import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
firebase.initializeApp({
  apiKey: 'AIzaSyAOY4bJYmRIQt683ibM0KcvWQWp5sS1cM0',
  projectId: 'lunchlearnjs',
});
firebase.firestore().settings({ experimentalForceLongPolling: true });

export default firebase;
