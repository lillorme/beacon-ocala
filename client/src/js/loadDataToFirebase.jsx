import React, { Component } from 'react';
import Reusables from '../data/reusables/reusables';
import HeaderData from'../data/header/header.dada';
import FooterOneData from '../data/footer/footer.dada';
import {addPagesCollectionAndDocuments} from '../firebase/firebase.utils';
import PageData from '../data/pages/page.data';
import MenuData from '../data/menu/menu.data';

class loadDataToFirebase extends Component {
  componentDidMount(){
  //addPagesCollectionAndDocuments('reusables', Reusables.map(( {title, sections} ) => ( {title, sections} )));
  addPagesCollectionAndDocuments('pages', PageData.map(( {title, meta, sections} ) => ( {title, meta, sections} )));
  //addPagesCollectionAndDocuments('images', Reusables.map(( {title, sections} ) => ( {title, sections} )));
  //addPagesCollectionAndDocuments('videos', PageData.map(( {title, meta, sections} ) => ( {title, meta, sections} )));
  //addPagesCollectionAndDocuments('menus', MenuData.map(( {title, menuClass, menu} ) => ( {title, menuClass, menu} )));
  //addPagesCollectionAndDocuments('headers', HeaderData.map(( {title, sections} ) => ( {title, sections} )));
  //addPagesCollectionAndDocuments('footers', FooterOneData.map(( {title, sections} ) => ( {title, sections} )));
  }

  render() {
    return(
      <></>
    )
  }
}

export default loadDataToFirebase 