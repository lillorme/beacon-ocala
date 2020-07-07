
const TeamSection = [{

    id: 1,
    class:"",
    wrapper:"large",
    type:'normal',
    display:true,
    introduction:{
        title:{
            text:'Leadership Team',
            tag: 'h2',
            styles:{
                textAlign: "center",
                //color:"white",
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
    background_type : 'normal',
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
            backgroundColor:'white',
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
                    display: true,
                    text:'David Wolf',
                    tag: 'h2',
                    styles:{
                        color:"white",
                    }
                },
                id: 1,
                title_tag: 'h2',
                class:"",
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
                background_image:'',
                image:{
                    id:26,
                    size:'',
                    display:true,
                    alt:'',
                    caption:'',
                    linkUrl: 'shop/hats',
                },
                linkUrl: 'shop/hats',
                contents: {
                    display: true,
                    html: `
                    <h3 class="theme-tenth-color">CEO</h3>
                    <p class="theme-tenth-color">David Wolf is a Founder and a respectful CEO at SoftC Company. For more than 20 years he has guided our company to a leading position in the Software Development Services industry.</p>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
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
                        //backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Funited-states.jpg?alt=media&token=bd6e5477-36d4-4562-836e-6c6ac3e9b4da")',
                    },
                    overlay:{
                        padding: '50px 0',
                    },
                }
            },
            {
                type:'normal',
                title:{
                    display: true,
                    text:'John Edington',
                    tag: 'h2',
                    styles:{
                        color:"white",
                    }
                },
                background_image:'',
                image:{
                    id:25,
                    size:'',
                    display:true,
                    alt:'',
                    caption:'',
                    linkUrl: 'shop/hats',
                },
                id: 2,
                class:"",
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
                linkUrl: 'shop/hats',
                contents: {
                    display: true,
                    html: `
                    <h3 class="theme-tenth-color">Chief Financial Officer</h3>
                    <p class="theme-tenth-color">David Wolf is a Founder and a respectful CEO at SoftC Company. For more than 20 years he has guided our company to a leading position in the Software Development Services industry.</p>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
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
                        //backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Funited-states.jpg?alt=media&token=bd6e5477-36d4-4562-836e-6c6ac3e9b4da")',
                    },
                    overlay:{
                        padding: '50px 0',
                    },
                }
            },
            {
                type:'normal',
                title:{
                    display: true,
                    text:'Helen Robertson',
                    tag: 'h2',
                    styles:{
                        color:"white",
                    }
                },
                background_image:'',
                image:{
                    id:24,
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
                linkUrl: 'shop/hats',
                contents: {
                    display: true,
                    html: `
                    <h3 class="theme-tenth-color">Chief Revenue Officer</h3>
                    <p class="theme-tenth-color">David Wolf is a Founder and a respectful CEO at SoftC Company. For more than 20 years he has guided our company to a leading position in the Software Development Services industry.</p>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
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
                        //backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Funited-states.jpg?alt=media&token=bd6e5477-36d4-4562-836e-6c6ac3e9b4da")',
                    },
                    overlay:{
                        padding: '50px 0',
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
            margin:'50px auto 0 auto',
            alignItem:'center',
        },
        buttons:[
            {
                title: 'Learn More', 
                url: '', 
                name: '1-800-426-7197',
                buttonClass:'theme-second-color-button',
                style:{

                }
            },
        ]
    },
}]

export default TeamSection;