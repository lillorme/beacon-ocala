import React from 'react';
import Fonts from '../fonts/fonts.components';
import { SectionIntroductionStyles } from './section.styles';

const SectionIntroduction = ({display, title, contents, styles}) => {

    return(

        <>
            {display ? (
                <SectionIntroductionStyles className="section-introduction" style={styles}>

                { title ? (

                    <div className={`section-title ${title.class ? title.class : null}`}>
                        <Fonts {...title} />
                    </div>
                    
                ):(

                    <> </>

                )}

                { contents ? (

                    <>
                        {
                            
                            Object.values(contents).map((items, index) => (

                                <div className={`section-description ${items.class ? items.class : null}`} dangerouslySetInnerHTML={{__html: items.html}} style={items.styles}/>

                            ))
                        }
            
                    </>
                    

                ):(

                    <> </>

                )}

                </SectionIntroductionStyles>
            ):(
                null
            )}


        </>
    )
} 

export default SectionIntroduction;
