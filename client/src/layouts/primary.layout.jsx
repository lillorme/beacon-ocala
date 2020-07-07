import React from 'react';
import SEO from '../components/seo/seo.components';
import Sections from '../components/sections/sections.component';
import {loadSinglePage }from '../graphql/request';
import {GetAsyncAwaitResponse} from '../js/script';

const PrimaryLayout = ({pageData}) =>{
   
    console.log(pageData);

    if(pageData === null || pageData === '' || pageData === undefined){
        return null;
    }

    console.log(pageData);

    return (
    
        <div className={pageData.title ? pageData.title : null}>
        
            <SEO meta={JSON.parse(pageData.meta)}/>
            <Sections sectionClass="gtc-4" dataRow={JSON.parse(pageData.sections)}/>

        </div>
    
    );

};
  
  
export default PrimaryLayout;
