import React from 'react';
import { Ul, Li, SiteLinks } from './menu.styles';
import {loadSingleMenu} from '../../graphql/request';
import {GetAsyncAwaitResponse } from '../../js/script';
import Fonts from '../fonts/fonts.components';
import { withRouter } from 'react-router-dom';

import './menu.styles.scss';
const Menu = ({menu, title, match}) => {
   
    const {menu_id,menuClass} = menu;
    const results = GetAsyncAwaitResponse(loadSingleMenu(menu_id));
    let menuData;
  
    if(results == null){
        return null;
    }else{
        menuData =  JSON.parse(results.menu);
    }

    return(
        <>
        {title ? (
            <Fonts {...title}/>
        ):(
            <></>
        )}
        <Ul className={`${menu_id}`}>
            {
                Object.values(menuData).map((items, index) => (
                 
                    <Li key={index} className={items.menuClass}>
                        
                        <SiteLinks 
                            to={`${match.url}${items.url}`} 
                            className={`menu-link`} 
                            title={items.title ? items.title : null }dangerouslySetInnerHTML={{__html: items.title ? items.title : null}} >
                           
                        </SiteLinks>

                        {items.sub_menu ? (
                            <Ul className={`${items.sub_menu.class}`}>
                                {
                                    Object.values(items.sub_menu.menu).map((sub_menu, index) => (
                                        <Li key={index}>
                                            <SiteLinks 
                                                to={`${match.url}${sub_menu.url}`} 
                                                title={sub_menu.title ? sub_menu.title : null}
                                                className={`menu-sub-link`} dangerouslySetInnerHTML={{__html: sub_menu.title ? sub_menu.title : null}}>
                                                 
                                            </SiteLinks>
                                        </Li>
                                    ))
                                }
                            </Ul>
                        ):(
                            <></>
                        )}
                    </Li>
                ))
            }
        </Ul>
        </>
    )
}

export default withRouter(Menu);