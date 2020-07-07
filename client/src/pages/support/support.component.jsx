import React from 'react';
import './support.styles.scss';
import SEO from '../../components/seo/seo.components';
import Sections from '../../components/sections/sections.component';
import { loadSinglePage} from '../../graphql/request';
import {GetAsyncAwaitResponse} from '../../js/script';

const Support = (props) => {

    let PageData;
    const results = GetAsyncAwaitResponse(loadSinglePage('support'));

    if(results == null){
        return null;
    }else{
        PageData = results;
    }

    return (
    
        <div className={PageData.title ? PageData.title : null}>
        
            <SEO meta={JSON.parse(PageData.meta)}/>
            <Sections sectionClass="gtc-4" dataRow={JSON.parse(PageData.sections)}/>

        </div>
    
    );

};


export default Support;