import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const  config = {
  apiKey: "AIzaSyDJvzXPTGdddPUB2hRtWXLjA_oU0MEZAUw",
  authDomain: "beacon-677c4.firebaseapp.com",
  databaseURL: "https://beacon-677c4.firebaseio.com",
  projectId: "beacon-677c4",
  storageBucket: "beacon-677c4.appspot.com",
  messagingSenderId: "419567440226",
  appId: "1:419567440226:web:3794c0f640313b0ebd1c3b",
  measurementId: "G-GZ09EBCX1G"
};
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title.replace(/\s+/g, '-').toLowerCase());
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
  
  export const addPagesCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
   
    objectsToAdd.forEach(pages => {
    
        const newDocRef = collectionRef.doc(pages.title.replace(/\s+/g, '_').toLowerCase());
        batch.set(newDocRef, pages);
     
    });
  
    return await batch.commit();
  };

  export const addMenuCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
   
    objectsToAdd.forEach(menus => {
    
        const newDocRef = collectionRef.doc(menus.title.replace(/\s+/g, '_').toLowerCase());
        batch.set(newDocRef, menus);
     
    });
  
    return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = collections => {

    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };
  
  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
  
  export default firebase;

  export const convertPagesSnapshotToMap = (snapshot, slug) => {
    
    const transformedCollection = snapshot.docs.map(doc => {
      
      const { title, meta, sections } = doc.data();
      
      return {
        routeName: encodeURI(title.replace(/\s+/g, '-').toLowerCase()),
        id: doc.id,
        title,
        meta,
        sections,
      };
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  

  // Get firebase data


export const getFirebasePage = (slug) => {

  const firbasePageRef = firestore.collection('pages');
  const getPagePromise = firbasePageRef.get()
  .then((querySnapshot) => {
    let newQueryData = [];
      querySnapshot.forEach(function( doc) {
          // doc.data() is never undefined for query doc snapshots
          const { title, meta, sections } = doc.data();
          const data = {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            slug: title.replace(/\s+/g, '-').toLowerCase(),
            meta,
            sections,
          };
          newQueryData.push(data);
      })
  
      return newQueryData[slug];
  
  }).then((results) => {
    return results;
  })



  return getPagePromise;
}

