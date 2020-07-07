
import Introduction from './introduction';
import Projects  from './projects';
const ContactData = [{
        title: 'Contact Us',
        meta:{
            title:'Contact Us',
            description:'Create React App',
            follow: 'index, follow',
            type: '', 
            image: '',
            url: '',
            site_name: '',
            creator: '',
        },
        sections:[
            ...Introduction,
            ...Projects,
        ]
    
}]

export default ContactData;