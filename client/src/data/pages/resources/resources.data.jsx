
import Introduction from './introduction';
import Development from './development';
import LatestTech from './latest-tech';
import CustomSoftware from './customSoftware';
import ContactUs from './ContactUs.home';

const ResourcesData = [{
        title: 'Resources',
        meta:{
            title:'Resources',
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
            ...Development,
            ...LatestTech,
            ...CustomSoftware,
            ...ContactUs,
        ]
    
}]

export default ResourcesData;