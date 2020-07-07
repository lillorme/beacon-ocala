
import Introduction from './contacts';
import SupportEmail from './supportEmail';
import Inquiries from './Inquiries';

const SupportData = [{
        title: 'Support',
        meta:{
            title:'Support',
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
            ...SupportEmail,
            ...Inquiries,
        ]
    
}]

export default SupportData;