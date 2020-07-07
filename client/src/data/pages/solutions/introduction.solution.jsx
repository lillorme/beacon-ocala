export const SolutionIntroduction = [{
    introduction:{
        display:true,
        title:{
            text:'An Easy to Use Records Management System That Works for Any Agency.',
            tag: 'h1',
            styles:{
                textAlign: "center",
                color:'white',
            },
        },
        
        contents: {
            html: '',
            styles:{
                maxWidth: '800px'
            }
        },
        styles:{
            maxWidth: '1200px'
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
    background_type : 'parallax',
    parallax:{
        blur:0,
        bgImage:'https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Fsolution%2FRecords%20Management%20System.jpg?alt=media&token=427b9e8d-dc6f-40fb-b6e1-8a13d2ec3eec',
        bgImageAlt:'The Best',
        strength: 500,
    },
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
                title: 'Schedule A Demo', 
                url: '', 
                name: 'Schedule A Demo',
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
            backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/beacon-677c4.appspot.com/o/beacon%2Fimages%2Fsolution%2FRecords%20Management%20System.jpg?alt=media&token=427b9e8d-dc6f-40fb-b6e1-8a13d2ec3eec',
            backgroundPosition:'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'initial',
            backgroundOrigin: 'initial',
            backgroundSize: 'cover',
        },
        overlay:{
            backgroundColor:'rgba(0,0,0, .3)',
            paddingTop: '80px',
            paddingBottom: '80px',
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
            display:false,
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
                        text:`The fastest way to make your agency's data accessible, secure, and easy to maintain`,
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
                        html: '',
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

export default SolutionIntroduction;