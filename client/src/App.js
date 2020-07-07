import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//Page Components

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component'

//Pages
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/aboutpage.component';
import Blog from './pages/blog/blog.component';
import ContactUs from './pages/contact-us/contact-us.component';
import Page404 from './pages/404/404.pages';
import SolutionsPage from './pages/solutions/solutionspage.component';
import Resources from './pages/resources/resources.component';
import Support from './pages/support/support.component';
import Jail from './pages/jail/jail.component';
import Cad from './pages/cad/cad.component';
import Records from './pages/records/records.component';
import advanceAthentication from './pages/advanceAthentication/advanceAthentication.component';

//Global js
import { scrollAction, projectTabClick} from './js/script';
import $ from 'jquery';
//importing data to firebase
import {addPagesCollectionAndDocuments} from './firebase/firebase.utils';
import PageData from './data/pages/page.data';
import MenuData from './data/menu/menu.data';
import Reusables from './data/reusables/reusables';
import HeaderData from'./data/header/header.dada';
import FooterOneData from './data/footer/footer.dada';

class App extends React.Component{

  constructor(props){
    
    super(props);
  
    this.state = {pages: []};
    
  }


  componentDidMount(){

    projectTabClick();
    scrollAction();
    addPagesCollectionAndDocuments('reusables', Reusables.map(( {title, sections} ) => ( {title, sections} )));
    addPagesCollectionAndDocuments('pages', PageData.map(( {title, meta, sections} ) => ( {title, meta, sections} )));
    //addPagesCollectionAndDocuments('images', Reusables.map(( {title, sections} ) => ( {title, sections} )));
    //addPagesCollectionAndDocuments('videos', PageData.map(( {title, meta, sections} ) => ( {title, meta, sections} )));
    addPagesCollectionAndDocuments('menus', MenuData.map(( {title, menu} ) => ( {title, menu} )));
    //addPagesCollectionAndDocuments('headers', HeaderData.map(( {title, sections} ) => ( {title, sections} )));
    //addPagesCollectionAndDocuments('footers', FooterOneData.map(( {title, sections} ) => ( {title, sections} )));
  }


  render(){
 
    const {location} = this.props;
    const currentPage = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    
    if(currentPage === '' || currentPage === '/'){
      document.body.classList.add('home');
    }else{
      document.body.classList.remove('home');
    }

    return (
    
      <div className={`innder-body`}>

        <Header />
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about_us' component={AboutPage} />
          <Route exact path='/solutions' component={SolutionsPage} />
          <Route exact path='/contact_us' component={ContactUs} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/cad' component={Cad} />
          <Route path='/jail' component={Jail} />
          <Route path='/records' component={Records} />
          <Route path='/advance-authentication' component={advanceAthentication} />
          <Route component={Page404} />
        </Switch>
  
        <Footer />
  
      </div>
    );
  }

}

export default withRouter(App);