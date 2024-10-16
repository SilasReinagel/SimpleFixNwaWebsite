import Home from './Pages/Home.svelte';
import BlogMenu from './Pages/BlogMenu.svelte';
import HowToFixASaggingGate from './Blogs/HowToFixASaggingGate.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: false, scrollTo: undefined },
  { path: '/services', href: '/#services', name: 'Services', component: Home, showInMainNav: true, scrollTo: 'services' },
  { path: '/blog/how-to-fix-a-sagging-gate-diy-tips', href: '/blog/how-to-fix-a-sagging-gate-diy-tips', name: 'How to Fix a Sagging Gate: DIY Tips', component: HowToFixASaggingGate, showInMainNav: false },
  { path: '/blog', href: '/blog', name: 'Blog', component: BlogMenu, showInMainNav: false },
]

const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});
const site = ({
    name: 'A Simple Fix - NWA Handyman',
    contactName: 'Joshua Hastings',
    shortDescription: 'A Simple Fix - Rogers, Bella Vista, Bentonville, Pea Ridge',
    facePhoto: '/images/face.jpg',
    owner: 'A Simple Fix',
    slogan: 'Professional handyman services at your doorstep!',
    email: 'Joshua@asimplefixnwa.com',
    logo: '/images/logo4.png',
    logoMobile: '/images/logo4.png',
    address: address("12674 Oak Valley Rd", "Rogers", "AR", "72756", ""),
    contactPrompt: 'What can I help you with?',
    phone: '(479) 426-8304',
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=61561358105745',
    }
  });
  

  export default site;