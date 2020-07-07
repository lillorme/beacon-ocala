import React from 'react';
import Sections from '../../components/sections/sections.component';
import {loadSingleHeader} from '../../graphql/request';
import {GetAsyncAwaitResponse} from '../../js/script';

import './header.styles.scss';

const Header = () => {

    let headerData;
    const results = GetAsyncAwaitResponse(loadSingleHeader('header_one'));
    
    if(results == null){
        return null;
    }else{
       
        headerData =  JSON.parse(results.sections);
    }

    const className = 'header';

    return(
        <header className={className}>

            <Sections sectionClass="gtc-4" dataRow={headerData ? headerData : null} />
            
        </header>
    )
    
}

export default Header;