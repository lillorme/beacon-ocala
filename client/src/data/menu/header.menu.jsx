import Icon from '@material-ui/core/Icon';
const HeaderMenu = [{
    title: 'Header Menu',
    menuClass:'header_menu',
    
    menu:[
        {menuClass:'', url: 'about_us',title:'About Us'},
        {
            menuClass:'solutions has-children', 
            url: 'solutions',
            title:`<span>Solutions <i class="fas fa-caret-down"></i></span>
          `,
            sub_menu:{
                id:'',
                class:'sub_menu',
                menu:[
                    {menuClass:'', url: 'jail',title:'Jail'},
                    {menuClass:'', url: 'cad',title:'CAD'},
                    {menuClass:'', url: 'records',title:'Records'},
                    {menuClass:'', url: 'advance-authentication',title:'Authentication'},
                ]
            }
        },
        {
            menuClass:'',
            url: 'contact_us',title:'Contact Us',

        },
        {menuClass:'', url: 'resources',title:'Resources'},
        {menuClass:'', url: 'support',title:'Support'},
    ]
}];

export default HeaderMenu;