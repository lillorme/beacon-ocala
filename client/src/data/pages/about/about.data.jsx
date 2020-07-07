
import IntroductionAbout from './introduction.about';
import MissionAbout from './mission.about';
import OurAchievements from './OurAchievements.about';
import PrinciplesAbout from './principles.about';
import OurClientsAbout from './ourClients.home';
import MeetTheTeam from './meetTheTeam';
import OurAwards from './ourAwards'
import OurRecognitions from './Recognitions';

const HomeData = [{
        title: 'About Us',
        meta:{
            title:'About Us',
            description:'Create React App',
            follow: 'index, follow',
            type: '', 
            image: '',
            url: '',
            site_name: '',
            creator: '',
        },
        sections:[
            ...IntroductionAbout,
            ...MissionAbout,
            ...OurAchievements,
            ...PrinciplesAbout,
            ...OurClientsAbout,
            ...MeetTheTeam,
            ...OurAwards,
            ...OurRecognitions,
        ]
    
}]

export default HomeData;