import React, { useState, useEffect }from "react";
import Slider from "react-slick";
import ColumnContent from '../columns/columns';
import Buttons from '../buttons/buttons.components';
import Fonts from '../fonts/fonts.components';

const AsNavFor = ({topData, bottomData, buttonData}) => {
    console.log(topData);
    const { columns, sliderSettings } = bottomData;
    
    const [topNav, setTopNav] = useState(null); 
    const [bottomNav, setBottomNav] = useState(null);

    let _topSlider = [];
    let _bottomSlider = [];

    useEffect(() => {
        setTopNav(_topSlider);
        setBottomNav(_bottomSlider);   
    }, [_topSlider, _bottomSlider]);

  return (
    <div className={`avocardro-asNavFor-slider ${bottomData.className}`} >
        <divs className="avocardro-asNavFor-slider-iiner">

            <div className="title" style={topData.styles}>
                <Fonts {...topData.title} />
            </div>
            <div className={topData.contentClass} style={topData.contentStyles}>
                <Slider className={`avocardro-slider ${bottomData.sliderClass}`} {...topData.sliderSettings} asNavFor={bottomNav} ref={slider => { _topSlider = slider; }} >
                    
                        {
                            Object.values(topData.contents).map((items, index) => (

                                <div items={items} key={index}  dangerouslySetInnerHTML={{__html: items.html}} style={items.styles}/>

                            ))
                        }
                </Slider>
            </div>

            <Slider {...sliderSettings} asNavFor={topNav} ref={slider => { _bottomSlider = slider;}} swipeToSlide={true} >
                {
                    Object.values(columns).map((items, index) => (
                            
                        <ColumnContent items={items} key={index}/>

                    ))
                }
            </Slider>

            <div className="avocardro-asNavFor-slider-iiner">
                {buttonData ? (
                    <Buttons {...buttonData}/>
                ):(
                    <></>
                )}
            </div>

        </divs>

    </div>   
    ); 
}

export default AsNavFor;