import {heroLeftColumnData} from './html/hero';

const HeroHome = [{
    title: 'Home Slider',
    title_tag: 'h1',
    contents: "",
    imageId: 1,
    id: 1,
    className:"homeHero",
    wrapper:"wide",
    type:'hero',
    background_type : 'video',
    display:true,
    video:{
        id: '0',
        type:'normal',
        display:true,
        videoClass:'',
        styles:{
            
        },
    },
    buttons:{
        display:false,
        grid:1,
        buttonClass:'grid-row gtc-1 gg-20',
        style:{
            maxWidth:'300px',
            margin:'auto',
            alignItem:'center',
        },
        buttons:[
            {
                title: 'Learn More', 
                url: '', 
                name: 'Learn More',
                buttonClass:'theme-second-color-button',
                style:{

                }
            },
        ]
    },
   
    settings:{
    },
    styles:{
        section:{
            paddingTop: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            paddingRight: '0',
            boxShadow: 'initial',
        },
        background:{
            backgroundImage: 'https://i.ibb.co/cvpntL1/hats.png',
            backgroundPosition:'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'initial',
            backgroundOrigin: 'initial',
            backgroundSize: 'cover',
        },
        overlay:{
            backgroundColor:'rgba(35,82,160,.8)',
            paddingTop: '150px',
            paddingBottom: '150px',
            paddingLeft: '0',
            paddingRight: '0',
        },
        wrapper:{
            paddingTop: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            paddingRight: '0',
        },
    },
    rows:
        {
            display:true,
            type:'normal',
            row_id: 1,
            is_slider: false,
            class:"",
            settings:{
                grid:'2',
                grid_gap: 20,
                layout: 'normal',
                design: 'normal',
            },
            columns: [
                {
                    type:'normal',
                    title: 'Hats',
                    
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: heroLeftColumnData,
                        styles:{
                            padding: '0',
                        }
                    }, 
                    buttons:{
                        display:true,
                        grid:2,
                        buttonClass:'grid-row gtc-2 gg-20',
                        style:{

                        },
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'Shedule A Demo',
                                buttonClass:'theme-second-color-button',
                                style:{

                                }
                            },
                            {
                                title: 'More', 
                                url: 'tel:1-800-426-7197', 
                                name: '1-800-426-7197',
                                buttonClass:'theme-fourth-color-button',
                                style:{

                                }
                            }
                        ]
                    },
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    styles:{
                        column:{
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                            boxShadow: 'initial',
                        },
                        background:{
                            backgroundImage: 'https://i.ibb.co/cvpntL1/hats.png',
                            backgroundPosition:'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'initial',
                            backgroundOrigin: 'initial',
                            backgroundSize: 'cover',
                        },
                        overlay:{
                            backgroundColor:'rgba(255, 255, 255, 0)',
                            paddingTop: '50px',
                            paddingBottom: '50px',
                            paddingLeft: '0',
                            paddingRight: '0',
                        },
                    }
                },
    
        
            ],
        },

}];

export default HeroHome;