/**
 * Adding Emails
 * type: 'email',
 * email:{ id:1, display:true, },
 */
columns:[
    {
        //type: must be set to email
        type:'email',
        title:{
            text:'The Nature',
            tag: 'h2',
            styles:{
                color:"blue",
            }
        },
        id: 1,
        class:"",
        buttons:{
            title: '', 
            url: '', 
            name: '',
        },
        //column must have email object with the follwong data
        email:{
            id:1,
            display:true,
        },
        image:{
            id:1,
            size:'',
            display:true
        },
        linkUrl: 'shop/hats',
        contents: '<a href="home.html">Lorem ipsum dolor sit amet</a>, te velit utroque maiestatis nec. Sed assum tempor iisque ea, te dolor senserit pro. Suas autem munere pro an, ei sed eleifend convenire forensibus. Vide deseruisse usu ut, cum cetero timeam ex, pro ad postea labores. Scripta virtute liberavisse quo ut.',
        settings:{
            layout: 'normal',
            column_span: 0,
            design: 'normal',
            wrapper: 'large',
            background_color:'#ffffff',
            background_opacity: '0',
            background_image: 'https://i.ibb.co/cvpntL1/hats.png',
            background_position:'center center',
            background_repeat: 'no-repeat',
            background_attachment: 'initial',
            background_origin: 'initial',
            background_size: 'cover',
            padding_left: '0',
            padding_right: '0',
            margin_left: '0',
            margin_right: '0',
            box_shadow: 'initial',
        },
    },
    
    
]