import { rowSlideSettings, slideSettings } from './partnersHtml';

const PartnersSection = [{

    id: 1,
    class:"",
    wrapper:"large",
    type:'asNavFor',
    display:true,
    introduction:{
        display:true,
        type:'htmlSlider',
        className:'parners',
        sliderClass:'parner_slider_top',
        title:{
            text:'We Understand How Frustrating it Can Be to Not Get The Support You Need When You Need it Fast',
            tag: 'h2',
            styles:{
                textAlign: "center",
                color:"white",
                maxWidth:"960px",
                
            },
        },
        sliderSettings:slideSettings,
        contentStyles:{
            margin:'auto',
            maxWidth:"1200px",
        },
        contentClass:"content text-center",
        contents: [
                {
                    display:true,
                    class:'theme-fourth-color-rgba',
                    html:`
                    <div class="testimonial-message-slide">
                        <p>“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”</p>
                        <p>October 28, 2017</p>
                    </div>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
                        textAlign: 'center',
                    }
                },
                {
                    display:true,
                    class:'theme-fourth-color-rgba',
                    html:`
                    <div class="testimonial-message-slide">
                        <p>“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”</p>
                    </div>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
                        textAlign: 'center',
                    }
                },
                {
                    display:true,
                    class:'theme-fourth-color-rgba',
                    html:`
                    <div class="testimonial-message-slide">
                        <p>“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”</p>
                    </div>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
                        textAlign: 'center',
                    }
                },
                {
                    display:true,
                    class:'theme-fourth-color-rgba',
                    html:`
                    <div class="testimonial-message-slide">
                        <p>“Software.”</p>
                    </div>
                    `,
                    styles:{
                        maxWidth: '600px',
                        color:'white',
                        textAlign: 'center',
                    }
                },
        ],
        styles:{
            maxWidth: '960px',
            margin : 'auto',
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
            backgroundColor:'rgba(35,82,160,1)',
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
            type:'slider',
            sliderSettings:rowSlideSettings,
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
                        text:'Dr. Sam White',
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
                        html: 'Surgeon at St. Laurence Child Clinic',
                        styles:{
                            maxWidth: '600px',
                            textAlign:'center',
                            color:"white",
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
                        text:'Mary Sanders',
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
                        html: '<p>Creative Director of MindSet</p>',
                        styles:{
                            maxWidth: '600px',
                            textAlign:'center',
                            color:"white",
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
                        text:'Victor Manner',
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
                        html: '<p>Recruiter at JobsDone</p>',
                        styles:{
                            maxWidth: '600px',
                            textAlign:'center',
                            color:"white",
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
                        text:'Software',
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
                        html: '<p>Software</p>',
                        styles:{
                            maxWidth: '600px',
                            textAlign:'center',
                            color:"white",
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
            ],
        
        },
        buttons:{
            display:true,
            grid:1,
            buttonClass:'grid-row gtc-1 gg-20',
            style:{
                maxWidth:'300px',
                margin:'auto',
                alignItem:'center',
                marginTop: '50px',
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

export default PartnersSection;