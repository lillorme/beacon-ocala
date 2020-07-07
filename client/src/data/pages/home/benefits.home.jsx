const HomeBenefits = [{
    type:'reusable',
    id: 1,
    class:"",
    wrapper:"large",
    display:true,
    introduction:{
        display: false,
        title:{
            text:'Welcome To The Future',
            tag: 'h1',
            styles:{
                color:"red",
                fontSize: "50px",
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
    
    reusable:{
        id:'main_benefits',
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
        bgImage:'https://picsum.photos/seed/picsum/1200/600',
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
            backgroundColor:'rgba(0,0,0,.03)',
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
    }

}]

export default HomeBenefits;