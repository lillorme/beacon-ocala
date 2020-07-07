
import {ContactUsDescription} from './ContactUs.html';
const ContactUsSection = [{

    id: 1,
    class:"theme-fourth-color-rgba",
    wrapper:"large",
    type:'normal',
    display:true,
    introduction:{
        title:{
            text:'Getting Started is Really Easy',
            tag: 'h2',
            class:'theme-fourth-color-rgba',
            styles:{
                textAlign: "center",
            },
        },
        
        contents: [{
            html: '',
            class:'',
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
            backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Fkeyboard.jpg?alt=media&token=393d0a25-deec-4cdc-a669-569a7113999d")',
            backgroundPosition:'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundOrigin: 'initial',
            backgroundSize: 'cover',
        },
        overlay:{
            backgroundColor:'rgba(35,82,160,.5)',
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
            grid:'2',
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
                    text:'Timely, Reliable Support',
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
                            name: '1-800-426-7197',
                            buttonClass:'theme-second-color-button',
                            style:{

                            }
                        },
                    ]
                },
                image:{
                    id:15,
                    size:'',
                    display:false,
                    alt:'',
                    caption:'',
                    linkUrl: 'shop/hats',
                },
                linkUrl: 'shop/hats',
                contents: {
                    display: true,
                    html: ContactUsDescription,
                    class:'theme-first-color',
                    styles:{
                        textAlign:'left',
                        color:'rgba(35,82,160,1)',
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

                type:'email',
                title:{
                    display: false,
                    text:'Contact Us',
                    tag: 'h2',
                    styles:{
                        color:"white",
                    }
                },
                id: 1,
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
                            name: '1-800-426-7197',
                            buttonClass:'theme-second-color-button',
                            style:{

                            }
                        },
                    ]
                },
                image:{
                    id:15,
                    size:'',
                    display:false,
                    alt:'',
                    caption:'',
                    linkUrl: 'shop/hats',
                },
                linkUrl: 'shop/hats',
                email:{
                    id:1,
                    display:true,
                },
                contents: {
                    display: false,
                    html: ContactUsDescription,
                    class:'theme-first-color',
                    styles:{
                        textAlign:'left',
                        color:'rgba(35,82,160,1)',
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

export default ContactUsSection;