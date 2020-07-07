
const Development = [{
    introduction:{
        display:true,
        title:{
            text:'Software We Develop',
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
    class:"theme-ninth-bg-color",
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
            backgroundColor:'rgba(255,255,255, 0)',
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
            is_slider: false,
            class:"",
            settings:{
                grid:'4',
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
                        text:'Web Applications',
                        tag: 'h2',
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
                        id:45,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: `We develop custom web applications which work well on 
                        all pop browsers and deliver impeccable UX with a clear layout and mobile adjustment.`,
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'top',
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
                            backgroundColor:'',
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
                        text:'Mobile Applications',
                        tag: 'h2',
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
                        id:46,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: `We ensure the satisfaction of all coding and security needs. We 
                        have proficient mobile application developers dedicated to build our company's dream and deliver exceptional user experience.`,
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'top',
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
                            backgroundColor:'',
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
                        text:'Desktop Applications',
                        tag: 'h2',
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
                        id:47,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: `We offer custom desktop applications for Windows, Mac, or Linux for autonomic work with comprehensive control over data safety and increased 
                        effectiveness.`,
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'top',
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
                            backgroundColor:'',
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
                        text:'Big Data Applications',
                        tag: 'h2',
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
                        id:48,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: `We develop custom big data applications specially designed to provide a profound understanding of meaningful aspects of your business.`,
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'top',
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
                            backgroundColor:'',
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

export default Development;