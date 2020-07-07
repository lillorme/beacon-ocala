import React from 'react';
import Slider from "react-slick";

import './slides.styles.scss';
import ColumnContent from '../columns/columns';

export const Slides  = ({dataColumn, sliderSettings}) => {

    if(sliderSettings === null || sliderSettings === undefined){
        return null;
    }

    return(
                
        <Slider {...sliderSettings} className={`slide_1`}>

            {
                Object.values(dataColumn).map((items, index) => (

                    <ColumnContent items={items} key={index} />

                ))
            }

        </Slider>
    )
}

export const HtmlSlides  = ({data, sliderSettings, slideClass}) => {
    
    if(sliderSettings === null || sliderSettings === undefined){
        return null;
    }

    return( 

        <Slider {...sliderSettings} className={slideClass}>
            {
                Object.values(data).map((items, index) => (
                   
                    <ColumnContent items={items} key={index} />

                ))
            }
        </Slider>
    
    )
}