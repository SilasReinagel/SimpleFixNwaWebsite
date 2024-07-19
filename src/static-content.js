import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: false, scrollTo: undefined },
  { path: '/home', href: '/index.html', name: 'Home', component: Home, showInMainNav: false, scrollTo: undefined },
  { path: '/services', href: '/index.html?page=home#services', name: 'Services', component: Home, showInMainNav: true, scrollTo: 'services' },
  { path: '/contact', href: '/index.html?page=home#contact', name: 'Contact', component: Contact, showInMainNav: true, scrollTo: 'contact' },

]

const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});
const site = ({
    name: 'A Simple Fix NWA',
    contactName: 'Joshua Hastings',
    shortDescription: 'A Simple Fix - Bella Vista, Bentonville, Rogers, Pea Ridge',
    owner: 'Joshua Hastings',
    slogan: 'Professional handyman services at your doorstep!',
    email: 'aaa@abc.com',
    logo: './images/logo2.png',
    logoMobile: './images/logo2.png',
    address: address("123 Main Street", "City", "ST", "12345", ""),
    contactPrompt: 'What can I help you with?',
    phone: '123-456-7890',
    social: {
      //facebook: '',
    }
  });
  

  export default site;