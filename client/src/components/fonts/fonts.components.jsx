import React from 'react';
import { H1, H2, H3, H4, H5, H6, } from './fonts.styles';

const Fonts = ({tag, text, titleClass, styles}) => {
  
    return(
        <>
            {(() => {

                switch(tag){

                    case 'h1':

                        return <H1 className={titleClass ? titleClass : null} as={tag} style={ styles ? styles : {} }>{text}</H1>
            
                    case 'h2':

                        return <H2 className={titleClass ? titleClass : null} as={tag} style={ styles ? styles : {} }>{text}</H2>

                    case 'h3':

                        return <H3 className={titleClass ? titleClass : null} as={tag} style={ styles ? styles : {} }>{text}</H3>
            
                    case 'h4':

                        return <H4 className={titleClass ? titleClass : null} as={tag} style={ styles ? styles : {} }>{text}</H4>
                    case 'h5':

                        return <H5 className={titleClass ? titleClass : null} as={tag} style={ styles ? styles : {} }>{text}</H5>
            
                    case 'h6':

                        return <H6 className={titleClass ? titleClass : null} as={tag} style={ styles ? styles : {} }>{text}</H6>    

                    default:

                        return null;

                }

            })()}

        </>
    )

}

export default Fonts;