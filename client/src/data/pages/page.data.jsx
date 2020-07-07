import HomeData from './home/home.data';
import AboutData from './about/about.data';
import ContactData from './contact-us/contact.data';
import SolutionsData from './solutions/solutions.data';
import ResourcesData from './resources/resources.data';
import SupportData from './support/support.data';
import JailData from './jail/jail.data';
import Cad from './cad/cad.data';
import Records from './records/records.data'
import advanceAthentication from './advanceAthentication/advanceAthentication.data';
const PageData = [
    //...HomeData,
    //...AboutData,
    //...ContactData,
    //...SolutionsData,
    //...ResourcesData,
    //...SupportData,
    ...JailData,
    ...Cad,
    ...Records,
    ...advanceAthentication,
]

export default PageData;