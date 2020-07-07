import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from 'apollo-boost';
import gql from 'graphql-tag';
 //The gql conver the string into a grapghql query that is required by apollo client
const endpointURL = '/graphql';

const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({uri: endpointURL})
    ]),
    cache: new InMemoryCache()
});

const pageDeatilsFragments = gql`
    fragment PageDetails on Page {
        id,
        title,
        meta,
        sections
    }
`;

const reusableDeatilsFragments = gql`
    fragment reusableDetails on Reusable {
        id,
        title,
        sections
    }
`;

const menuDeatilsFragments = gql`
    fragment menuDetails on Menu {
        id,
        title,
        menu
    }
`;

const headerDeatilsFragments = gql`
    fragment headerDetails on Header {
        id,
        title,
        sections
    }
`;

const footerDeatilsFragments = gql`
    fragment footerDetails on Footer {
        id,
        title,
        sections
    }
`;

const singlePageQuery = gql`
    query getSiglePage($id: ID!){
        page(id: $id){
            ...PageDetails
        }  
    }
    ${pageDeatilsFragments}
`;

const allPagesQuery = gql`
    {
        pages {
            ...PageDetails
        }    
    }
    ${pageDeatilsFragments}
`;

const SingleReusable = gql`
    query SingleReusable($id: ID!){
        reusable(id: $id){
            ...reusableDetails
        }  
    }
    ${reusableDeatilsFragments}
`;

const SingleMenu = gql`
    query SingleMenu($id: ID!){
        menu(id: $id){
            ...menuDetails
        }  
    }
    ${menuDeatilsFragments}
`;

const SingleHeader = gql`
    query SingleHeader($id: ID!){
        header(id: $id){
            ...headerDetails
        }  
    }
    ${headerDeatilsFragments}
`;

const SingleFooter = gql`
    query SingleFooter($id: ID!){
        footer(id: $id){
            ...footerDetails
        }  
    }
    ${footerDeatilsFragments}
`;

export async function loadPages(){
    //Old
    //const data = await graphqlRequest(query);

    //new with apollo client
    const {data} = await client.query({query: allPagesQuery, fetchPolicy: 'no-cache'}).catch((res) => {
        const errors = res.graphQLErrors.map((error) => {
          return error.message;
        });
        console.log({loadPages: errors})
      });
    return data.pages;
}

export async function loadSinglePage(id){
    //Old
    //const data = await graphqlRequest(query, {id});

     //new with apollo client
    const {data} = await client.query({query: singlePageQuery, variables:{id}, fetchPolicy:'cache-first'}).catch((res) => {
        const errors = res.graphQLErrors.map((error) => {
          return error.message;
        });
        console.log({loadSinglePage: errors, res})
      });
    return data.page;
}

export async function loadSingleReusable(id){
    //Old
    //const data = await graphqlRequest(query, {id});

     //new with apollo client
    const {data} = await client.query({query: SingleReusable, variables:{id}, fetchPolicy:'cache-first'}).catch((res) => {
        const errors = res.graphQLErrors.map((error) => {
          return error.message;
        });
        console.log({loadSingleReusable: errors})
      });
    return data.reusable;
}

export async function loadSingleMenu(id){
    const {data} = await client.query({query: SingleMenu, variables:{id}, fetchPolicy:'cache-first'}).catch((res) => {
        const errors = res.graphQLErrors.map((error) => {
          return error.message;
        });
        console.log({loadSingleMenu: errors})
      });
    return data.menu;
}

export async function loadSingleHeader(id){
    const {data} = await client.query({query: SingleHeader, variables:{id}, fetchPolicy:'cache-first'}).catch((res) => {
        const errors = res.graphQLErrors.map((error) => {
          return error.message;
        });
        console.log({loadSingleHeader: errors})
      });
    return data.header;
}

export async function loadSingleFooter(id){
    const {data} = await client.query({query: SingleFooter, variables:{id}, fetchPolicy:'cache-first'}).catch((res) => {
        const errors = res.graphQLErrors.map((error) => {
          return error.message;
        });
        console.log({loadSingleFooter: errors})
      });
    return data.footer;
}