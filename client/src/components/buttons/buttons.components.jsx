import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './button.styles.scss';
const Buttons  = (props) => {

    const { display, buttons, buttonClass, style} = props;

    if(buttons === '' || buttons === undefined){
        return null;
    }
    return(

        <>
        {display ? (
            <div className={`grid-row_column_inner_button-container ${buttonClass ? buttonClass : null}`} style={style ? style : null}>
                {
                    Object.values(buttons).map((button, index) => (
                   
                        <Button className={button.buttonClass ? button.buttonClass : ''} variant="contained" color="primary" key={index}>
                            <Link to={button.url} title={button.title} >{button.name}</Link>
                        </Button>

                    ))
                }
            </div>
        ):(
           <></> 
        )}
        </>
               
    )
}

export default  withRouter(Buttons);