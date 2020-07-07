import SolutionIntroduction from './introduction.solution';
import SolutionManagement from './management.solution';
import Accessible from './accessible';
import Features from './features.solution';
import AgencyMission from './agencymission.solution';

const SolutionManagementData = [{
        title: 'Solutions',
        meta:{
            title:'Solutions',
            description:'Create React App',
            follow: 'index, follow',
            type: '', 
            image: '',
            url: '',
            site_name: '',
            creator: '',
        },
        sections:[
            ...SolutionIntroduction,
            ...SolutionManagement,
            ...Accessible,
            ...Features,
            ...AgencyMission,
        ]
    
}]

export default SolutionManagementData;