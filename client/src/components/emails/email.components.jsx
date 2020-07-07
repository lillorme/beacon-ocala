import React from 'react';
import ContactUs from './contactus.components';
import RequestQuote from './projectEmail.components';

const EmailTemplate = ({id, display}) => {

  return(

    <>
      { display ? (

        <>
          {(() => {

            switch(id){

                case 1:

                  return <ContactUs />
                    
                case 2:

                  return <RequestQuote />

                default:

                    return null;
            }

          })()}
        </>

      ):(
        <></>
      )}
     
    </>

  )

}

export default EmailTemplate;