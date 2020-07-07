const IntroductionHome = [{
    introduction:{
        display: true,
        title:{
            text:'Software Should Make Your Job Easier. Not More Complicated.',
            tag: 'h1',
            styles:{
                textAlign: "center",
            },
        },
        
        contents: [{
            html: '',
            styles:{
                maxWidth: '600px'
            }
        }],
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

            display:true,
            type:'normal',
            row_id: 1,
            is_slider: true,
            class:"",
            settings:{
                grid:'3',
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
                        display: false,
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
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: 'Tired of waiting for support from an unresponsive software provider?',
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: false,
                        text:'The Sea',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:false,
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
                    contents: {
                        display: true,
                        html: '<p>Do you want to reduce human error and the need for disciplinary measures?</p>',
                        styles:{
                            maxWidth: '600px'
                        }
                    },  
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: false,
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:false,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '<p>Fed up with chaotic, disorganized software?</p>',
                        styles:{
                            maxWidth: '600px'
                        }
                    },  
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: false,
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:false,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '<p>Frustrated with software that’s more headache than help?</p>',
                        styles:{
                            maxWidth: '600px'
                        }
                    },  
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: false,
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:false,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '<p>Are you bogged down by data that are difficult to access?</p>',
                        styles:{
                            maxWidth: '600px'
                        }
                    },  
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: false,
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:false,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '<p>Do you feel like you’re not getting the most out of your software?</p>',
                        styles:{
                            maxWidth: '600px'
                        }
                    },  
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: false,
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:false,
                        buttons:[
                            {
                                title: 'More', 
                                url: '', 
                                name: 'More',
                            },
                            
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '<p>Do you feel like you’re not getting the most out of your software?</p>',
                        styles:{
                            maxWidth: '600px'
                        }
                    },  
                    settings:{
                        layout: 'stacked-left',
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
                    type:'normal',
                    title:{
                        display: true,
                        text:'If So We Can Help',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:10,
                        size:'',
                        display:false,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                        display:true,
                        grid:1,
                        buttonClass:'grid-row gtc-1 gg-20',
                        style:{
                            maxWidth:'300px',
                            margin:'auto',
                            alignItem:'center',
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
                        ]
                    },

                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '<p>Do you feel like you’re not getting the most out of your software?</p>',
                        styles:{
                            maxWidth: '600px',
                            margin:'auto',
                        }
                    },  
                    settings:{
                        layout: 'normal',
                        column_span: 3,
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