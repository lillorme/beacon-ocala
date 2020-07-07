import HeroHome from './hero.home';
import HomeBenefits from './benefits.home'
import IntroductionHome from './introduction.home';
import OurClientsHome from './ourClients.home';
import WhatWeDoHome from './whatWeDo.home';
import WorkEnvironment from './WorkEnvironment.home';
import PartnersHome from './Partners.home';
import GettingStarted from './GettingStarted.home';
import ContactUs from './ContactUs.home';
const HomeData = [{
        title: 'Home',
        meta:{
            title:'Home Page',
            description:'Create React App',
            follow: 'index, follow',
            type: '', 
            image: '',
            url: '',
            site_name: '',
            creator: '',
        },
        sections:[
            ...HeroHome,
            ...HomeBenefits,
            ...IntroductionHome,
            ...WhatWeDoHome,
            ...WorkEnvironment,
            ...PartnersHome,
            ...GettingStarted,
            ...OurClientsHome,
            ...ContactUs,
        ]
    
}]

export default HomeData;