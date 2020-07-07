import {introductionHtml} from './html/introduction'
const Introduction = [{
    introduction:{
        display:false,
        title:{
            text:'Software Should Make Your Job Easier. Not More Complicated.',
            tag: 'h1',
            styles:{
                textAlign: "center",
            },
        },
        
        contents: {
            html: '',
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
    type:'normal',
    display:true,
    /**
     ****** background_type *******
     * - video
     * - parallax
     * - normal
     */
    background_type : 'normal',
    parallax:{
        blur:0,
        bgImage:'https://picsum.photos/seed/picsum/1200/600',
        bgImageAlt:'The Best',
        strength: 500,
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
            backgroundColor:'rgba(255,255,255, 1)',
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

            type:'normal',
            row_id: 1,
            is_slider: false,
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

                    type:'normal',
                    title:{
                        display: true,
                        text:'About SoftC',
                        tag: 'h1',
                        styles:{
                            color:"blue",
                        }
                    },
                    id: 1,
                    class:"",
                    buttons:{
                        display:false,
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
                        id:27,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: introductionHtml,
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'stacked-right',
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

export default Introduction;