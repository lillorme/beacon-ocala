import MainBenefits from './mainBenefits/mainBenefits';
import WhatWeDo from './whatWeDo/whatWeDo';
import WorkEnvironment from './WorkEnvironment/WorkEnvironment';
import OurClients from './ourClients/ourClients';
import Partners from './partners/partners';
import GettingStarted from './GettingStarted/GettingStarted';
import ContactUs from './ContactUs/ContactUs';
import meetTheTeam from './team/team';
import Awards from './awards/awards';
import Recognitions from './Recognition/Recognition';
import RequestQuote from './projectEmail/RequestQuote';
import SupportEmail from './supportEmail/RequestQuote';

const Reusables = [
    ...MainBenefits,
    ...WhatWeDo,
    ...WorkEnvironment,
    ...Partners,
    ...GettingStarted,
    ...OurClients,
    ...ContactUs,
    ...meetTheTeam,
    ...Awards,
    ...Recognitions,
    ...RequestQuote,
    ...SupportEmail,
]

export default Reusables;