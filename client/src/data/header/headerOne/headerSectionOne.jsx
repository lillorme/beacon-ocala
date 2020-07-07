const HeaderSectionOne = [{

    id: 1,
    class:"",
    wrapper:"large",
    type:'normal',
    background_type : 'normal',
    display:true,
    buttons:{
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
            position:'fixed',
            zIndex: '99',
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
            paddingTop: '10px',
            paddingBottom: '10px',
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
    rows:{
            display:true,
            type:'normal',
            row_id: 1,
            is_slider: 'false',
            settings:{
                grid:'3',
                grid_gap: 20,
                layout: 'normal',
                design: 'normal',
            },
            columns: [
                {
                    type:'normal',
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    buttons:{
                        display:false,
                    },

                    image:{
                        id:0,
                        size:'',
                        display:true,
                        alt:'',
                        caption:'',
                        linkUrl: '/',
                        imageClass:'header-logo'
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
                            backgroundColor:'rgba(0,0,0,0)',
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                            
                        },
                    }
                },
                {
                    type:'menu',
                    menu:{
                        display:'true',
                        menu_id: 'header_menu',
                        menuClass:'header_menu',
                        styles:{

                        }
                    },
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    buttons:{
                        display:false,
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
                            backgroundColor:'rgba(0,0,0,0)',
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                            alignItem:'right',
                            justifyItems: 'end',
                        },
                    }
                },
                {
                    type:'normal',
                    settings:{
                        layout: 'normal',
                        column_span: 0,
                        design: 'normal',
                        wrapper: 'large',
                    },
                    buttons:{
                        display:true,
                        grid:1,
                        buttons:[
                            {
                                title: 'More', 
                                url: 'tel:1-800-426-7197', 
                                name: '1-800-426-7197',
                                buttonClass:'theme-second-color-button',
                                style:{

                                }
                            }
                            
                        ]
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
                            backgroundColor:'rgba(0,0,0,0)',
                            paddingTop: '0',
                            paddingBottom: '0',
                            paddingLeft: '0',
                            paddingRight: '0',
                            justifyItems: 'end',
                        },
                    }
                },
            ],
        },

}];
 

export default HeaderSectionOne;