
const fs = require('fs');
const { ApolloServer, gql} = require('apollo-server-express');
const express = require('express');
const firebase = require('firebase/app');
require('firebase/firestore');


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

// const  config = {
//   apiKey: "AIzaSyB5AfndUKzdXGHg8hCqou4OKIyC-TsO6VM",
//   authDomain: "beacon-software-solutions.firebaseapp.com",
//   databaseURL: "https://beacon-software-solutions.firebaseio.com",
//   projectId: "beacon-software-solutions",
//   storageBucket: "beacon-software-solutions.appspot.com",
//   messagingSenderId: "131707790382",
//   appId: "1:131707790382:web:820dd34fe7e3159c36ebbf",
//   measurementId: "G-2WE35F9202"
// };

firebase.initializeApp(config);

const firestore = firebase.firestore()

const normalizePort = port => parseFloat(port, 10);

const port = normalizePort(process.env.PORT || 9000);


const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, 'public', 'index.html'));
});

const typeDefs = gql`
  type Query {
    page(id: ID!): Page,
    pages: [Page],
    reusable(id: ID!): Reusable,
    reusables: [Reusable],
    menu(id: ID!): Menu,
    header(id: ID!): Header,
    footer(id: ID!): Footer
  }

  type Page {
    id: ID!
    meta: String,
    sections: String,
    title: String!,
  }

  type Header {
    id: ID!
    title: String!,
    sections: String,
  }

  type Footer {
    id: ID!
    title: String!,
    sections: String,
  }

  type Menu{
    id: ID!,
    title: String!,
    menu: String!,
  }
  type Reusable {
    id: ID!,
    title: String!,
    sections: String,
  }
`;


//addCollectionAndDocuments('pages', homeData.home_page.map(( {title, meta, sections} ) => ( {title, meta, sections} )));

const getAllPageFromFirebase = (obj) => {
  const getPagePromise = obj.get()
  .then((querySnapshot) => {
    let newQueryData = [];
    querySnapshot.forEach(function( doc) {
        // doc.data() is never undefined for query doc snapshots
        const { title, meta, sections } = doc.data();
        const data = {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title: title,
          slug: title.replace(/\s+/g, '-').toLowerCase(),
          meta: JSON.stringify(meta),
          sections: JSON.stringify(sections),
        };
        newQueryData.push(data);
    })
  
    return newQueryData;
  
  })
  return getPagePromise;
}

const getSinglePageFromFirebase = (id) => {
  const single = firestore.collection('pages').doc(id).get().then((querySnapshot) => {
    let newQueryData = [];
    [querySnapshot].forEach(function( doc) {
        // doc.data() is never undefined for query doc snapshots

        const { title, meta, sections } = doc.data();
        const data = {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title: title,
          slug: title.replace(/\s+/g, '-').toLowerCase(),
          meta: JSON.stringify(meta),
          sections: JSON.stringify(sections),
        };
        newQueryData.push(data);
    })

    return newQueryData;
  }).then((value) =>{
    return value[0];
  })

  return single;
}

const getSingleReusableFromFirebase = (id) => {
  const single = firestore.collection('reusables').doc(id).get().then((querySnapshot) => {
    let newQueryData = [];
    [querySnapshot].forEach(function( doc) {
        // doc.data() is never undefined for query doc snapshots
        const { title, sections } = doc.data();
        const data = {
          id: doc.id,
          title: title,
          slug: title.replace(/\s+/g, '-').toLowerCase(),
          sections: JSON.stringify(sections),
        };
        newQueryData.push(data);
    })

    return newQueryData;
  }).then((value) =>{
    return value[0];
  })

  return single;
}

const getSingleMenuFromFirebase = (id) => {
  const single = firestore.collection('menus').doc(id).get().then((querySnapshot) => {
    let newQueryData = [];
    [querySnapshot].forEach(function( doc) {
        // doc.data() is never undefined for query doc snapshots
        const { title, menu } = doc.data();
        const data = {
          id: doc.id,
          title: title,
          slug: title.replace(/\s+/g, '-').toLowerCase(),
          menu: JSON.stringify(menu),
        };
        newQueryData.push(data);
    })

    return newQueryData;
  }).then((value) =>{
    return value[0];
  })

  return single;
}

const getSingleHeaderFromFirebase = (id) => {
  const single = firestore.collection('headers').doc(id).get().then((querySnapshot) => {
    let newQueryData = [];
    [querySnapshot].forEach(function( doc) {
        // doc.data() is never undefined for query doc snapshots
        const { title, sections } = doc.data();
        const data = {
          id: doc.id,
          title: title,
          slug: title.replace(/\s+/g, '-').toLowerCase(),
          sections: JSON.stringify(sections),
        };
        newQueryData.push(data);
    })

    return newQueryData;
  }).then((value) =>{
    return value[0];
  })

  return single;
}

const getSingleFooterFromFirebase = (id) => {
  const single = firestore.collection('footers').doc(id).get().then((querySnapshot) => {
    let newQueryData = [];
    [querySnapshot].forEach(function( doc) {
        // doc.data() is never undefined for query doc snapshots
        const { title, sections } = doc.data();
        const data = {
          id: doc.id,
          title: title,
          slug: title.replace(/\s+/g, '-').toLowerCase(),
          sections: JSON.stringify(sections),
        };
        newQueryData.push(data);
    })

    return newQueryData;
  }).then((value) =>{
    return value[0];
  })

  return single;
}


const firbaseAllPageRef = firestore.collection('pages');


const resolvers = {
  Query: {
    page: (root, {id}) => getSinglePageFromFirebase(id),
    pages: () => getAllPageFromFirebase(firbaseAllPageRef),
    reusable: (root, {id}) => getSingleReusableFromFirebase(id),
    menu: (root, {id}) => getSingleMenuFromFirebase(id),
    header: (root, {id}) => getSingleHeaderFromFirebase(id),
    footer: (root, {id}) => getSingleFooterFromFirebase(id),
  }
};



const context = ({req}) => ({user: req.user && db.users.get(req.user.sub)});
const apolloServer = new ApolloServer({typeDefs, resolvers, context});
apolloServer.applyMiddleware({app, path: '/graphql'});



app.listen(port, () => console.info(`Server started on port ${port}`));
