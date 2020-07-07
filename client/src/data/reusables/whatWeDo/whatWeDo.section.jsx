
const WhatWeDoSection = [{

    id: 1,
    class:"",
    wrapper:"large",
    type:'normal',
    display:true,
    introduction:{
        display:true,
        title:{
            text:'WHAT WE DO.',
            tag: 'h2',
            styles:{
                textAlign: "center",
                color:"white",
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
    /**
     ****** background_type *******
     * - video
     * - parallax
     * - normal
     */
    background_type : 'parallax',
    parallax:{
        blur:0,
        bgImage:'https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Fpolice-car.jpg?alt=media&token=4de78af6-4ae9-4350-8f1c-41fe4ca0874f',
        bgImageAlt:'The Best',
        strength: 500,
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
            backgroundColor:'rgba(35,82,160,.7)',
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
                        text:'Jail Management System',
                        tag: 'h2',
                        styles:{
                            color:"white",
                        }
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
                                title: 'Learn More', 
                                url: '', 
                                name: 'Learn More',
                                buttonClass:'theme-second-color-button',
                                style:{

                                }
                            },
                        ]
                    },
                    image:{
                        id:11,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    linkUrl: 'shop/hats',
                    contents: {
                        display: true,
                        html: '',
                        styles:{
                            maxWidth: '600px'
                        }
                    },           
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    styles:{
                        column:{
                     
                        },
                        background:{

                        },
                        overlay:{
        
                        },
                    }
                },
                {
                    type:'normal',
                    title:{
                        display: true,
                        text:'Computer Aided Dispatch',
                        tag: 'h2',
                        styles:{
                            color:"white",
                        }
                    },
                    image:{
                        id:12,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 2,
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
                                title: 'Learn More', 
                                url: '', 
                                name: 'Learn More',
                                buttonClass:'theme-second-color-button',
                                style:{

                                }
                            },
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {

                    },  
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    styles:{
                        column:{

                        },
                        background:{

                        },
                        overlay:{

                        },
                    }
                },
                {
                    type:'normal',
                    title:{
                        display: true,
                        text:'Public Safety Records',
                        tag: 'h2',
                        styles:{
                            color:"white",
                        }
                    },
                    image:{
                        id:13,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 3,
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
                                title: 'Learn More', 
                                url: '', 
                                name: 'Learn More',
                                buttonClass:'theme-second-color-button',
                                style:{

                                }
                            },
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {

                    },  
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    styles:{
                        column:{
              
                        },
                        background:{

                        },
                        overlay:{

                        },
                    }
                },
                {
                    type:'normal',
                    title:{
                        display: true,
                        text:'Advanced Authentication',
                        tag: 'h2',
                        styles:{
                            color:"white",
                        }
                    },
                    image:{
                        id:14,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 3,
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
                                title: 'Learn More', 
                                url: '', 
                                name: 'Learn More',
                                buttonClass:'theme-second-color-button',
                                style:{

                                }
                            },
                        ]
                    },
                    linkUrl: 'shop/hats',
                    contents: {

                    },  
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    styles:{
                        column:{
              
                        },
                        background:{

                        },
                        overlay:{

                        },
                    }
                },
            ],
        
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
}]

export default WhatWeDoSection;