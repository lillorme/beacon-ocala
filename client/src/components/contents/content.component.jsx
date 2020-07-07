import React from 'react';
import { Content, Information } from './content.styles';
import Fonts from '../fonts/fonts.components';

const Contents  = (props) => {

    const {title, contents} = props;

    return(

        <>
        {contents.display ? (
            <Content className="grid-row_column_inner_content" style={contents.styles ? contents.styles : null}>

                {title.display ? (
                    <div className="grid-row_column_inner_content_title">
                        <Fonts {...title} />
                    </div> 
                ):(
                    <></>
                )}

                {contents.html ? (
                    <Information className={`grid-row_column_inner_content_information ${contents.class ? contents.class : null}`} dangerouslySetInnerHTML={{__html: contents.html}}/>  
                ):(
                    <></>
                )}
                    
            </Content>
        ):(
            <></>
        )}
        </>

            
    )
}

export default Contents;