
const MainBenefitsSection = [{

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

    settings:{
    },
    styles:{
        section:{

        },
        background:{
        },
        overlay:{
            backgroundColor:'rgba(255,242,0,1)',
            paddingTop: '30px',
            paddingBottom: '30px',
        },
        wrapper:{
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
                        text:'Save Time',
                        tag: 'h2',
                        styles:{
                            color:"blue",
                        }
                    },
                    id: 1,
                    title_tag: 'h2',
                    class:"",
                    buttons:{
                    
                    },
                    image:{
                        id:7,
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
                        text:'Eliminate Consution',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:8,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: 'shop/hats',
                    },
                    id: 2,
                    class:"",
                    buttons:{

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
                        text:'The Music',
                        tag: 'h2',
                        styles:{
            
                        }
                    },
                    image:{
                        id:9,
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

export default MainBenefitsSection;