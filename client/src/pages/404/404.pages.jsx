import React from 'react';
import Data404 from '../../data/pages/404/404.dada';
import SEO from '../../components/seo/seo.components';
import Sections from '../../components/sections/sections.component';


const Page404 = ({ location }) => {

    return (
        <>

            <div className="contact-us">

                <SEO meta={Data404.meta} />
                <Sections sectionClass="gtc-4" dataRow={Data404.sections} />
                
            </div>

        </>
    );

};

export default Page404;