import React from 'react';
import Sections from '../../components/sections/sections.component';
import {loadSingleFooter} from '../../graphql/request';
import {GetAsyncAwaitResponse} from '../../js/script';

const Footer = () => {

    let footerData;
    const results = GetAsyncAwaitResponse(loadSingleFooter('footer_one'));
    
    if(results == null){
        return null;
    }else{
        footerData =  JSON.parse(results.sections);
    }

    return(
        <footer className='footer'>
            <Sections sectionClass="gtc-4" dataRow={footerData ? footerData : null} />
        </footer>
    )
}

export default Footer;