
import {GettingStartedDescription} from './GettingStarted.html';
const GettingStartedSection = [{

    id: 1,
    class:"",
    wrapper:"large",
    type:'normal',
    display:true,
    introduction:{
        title:{
            text:'Getting Started is Really Easy',
            tag: 'h2',
            styles:{
                textAlign: "center",
                color:'rgba(35,82,160,1)',
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
                    display:true,
                    alt:'',
                    caption:'',
                    linkUrl: 'shop/hats',
                },
                linkUrl: 'shop/hats',
                contents: {
                    display: true,
                    html: GettingStartedDescription,
                    class:'theme-first-color',
                    styles:{
                        textAlign:'left',
                        color:'rgba(35,82,160,1)',
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
        display:true,
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

export default GettingStartedSection;