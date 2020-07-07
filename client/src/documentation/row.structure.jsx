import React from 'react';
import { 
    introductionHtml,
    introductionColumn1,
    introductionColumn2,
    introductionColumn3 
} from './html/introduction'
const IntroductionHome = [{
    introduction:{
        title:{
            text:'Welcome To The Future',
            tag: 'h1',
            styles:{
                color:"red",
                fontSize: "50px",
                textAlign: "center",
            },
        },
        
        contents: {
            html: introductionHtml,
            styles:{
                maxWidth: '600px'
            }
        },
        styles:{
            maxWidth: '960px'
        },
        settings:{

        },
    },
    id: 1,
    class:"",
    wrapper:"large",
    type:'content',

    /**
     ****** background_type *******
     * - video
     * - parallax
     * - normal
     */
    background_type : 'parallax',
    parallax:{
        blur:0,
        bgImage:'https://picsum.photos/seed/picsum/1200/600',
        bgImageAlt:'The Best',
        strength: 500,
    },
    buttons:{
        display:true,
        title: '', 
        url: '', 
        name: '',
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
            backgroundColor:'rgba(0,0,0,.03)',
            paddingTop: '50px',
            paddingBottom: '50px',
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

    /**
    ****** type *******
    * - slider
    * - normal
    */
    rows: {


            type:'slider',
            row_id: 1,
            is_slider: true,
            class:"",
            settings:{
                grid:'1',
                grid_gap: 20,
                layout: 'normal',
                design: 'normal',
            },

            /**
            * **** Column Type ****
            * - normal
            * - email
            */

            columns:[
                {

                    type:'content',
                    title:{
                        text:'The Nature is here',
                        tag: 'h2',
                        styles:{
                            color:"blue",
                        }
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:true,
                        grid:1,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                                style:{

                                }
                            }
                            
                        ]
                    },
                    image:{
                        id:1,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                    },
                    linkUrl: 'shop/hats',
                    contents: introductionColumn1,
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
                            backgroundColor:'white',
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                        },
                    }
                },
                {
                    type:'content',
                    title:{
                        text:'The Sea',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:2,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:true,
                        grid: 1,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: introductionColumn2,
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
                            backgroundColor:'white',
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                        },
                    }
                },
                {
                    type:'content',
                    title:{
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:3,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:true,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: introductionColumn3,
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
                            backgroundColor:'white',
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                        },
                    }
                },
            ],
        
        },
}]

export default IntroductionHome;