import React from 'react';
import { GridColumn, GridColumnInner, GridColumnOverlay } from './columns.styles';
import ImageMedia from '../images/images.component';
import Contents from '../contents/content.component';
import Buttons from '../buttons/buttons.components';
import EmailTemplate from '../../components/emails/email.components';
import Menu from '../menu/menu.component';

const ColumnContent = ({items}) =>{ 

    const {type, settings } = items;
    return(
    
    <GridColumn  
    className={`grid-row_column ${items.buttons.display ? 'has-button' : '' } ${type ? type : '' } ${settings ? 'gcs-' + settings.column_span : '' }`} 
    style={ items.styles.column ? items.styles.column : {} }>
    

        <GridColumnInner className={`grid-row_column_inner`} style={ items.styles.background ? items.styles.background : {} }>

            <GridColumnOverlay className={`grid-row_column_inner_overlay ${settings ? settings.layout : '' }`} style={ items.styles.overlay ? items.styles.overlay : {} }>

                {items.image ? (
                    <ImageMedia {...items.image}/>
                ):(
                    <></>
                )}

                {(() => {
                    if(items.menu ){
                        return <Menu menu={items.menu} title={items.title ? items.title : null}/>
                    }
                })()} 
        


                {items.contents ? (
                    <Contents contents={items.contents} title={items.title} style={items.styles}/>
                ):(
                    <></>
                )}
                
                {items.buttons ? (
                    <Buttons {...items.buttons}/>
                ):(
                    <></>
                )}
                
                {items.email ? (
                    <EmailTemplate {...items.email}/>
                ):(
                    <></>
                )}
                
            </GridColumnOverlay>

        </GridColumnInner>

    </GridColumn>
    )
        
};

export default ColumnContent;