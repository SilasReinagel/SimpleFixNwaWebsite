import Home from './Pages/Home.svelte';
import Contact from './Pages/Contact.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
]

const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});
const site = ({
    name: 'A Simple Fix NWA',
    shortDescription: 'A Simple Fix - Bella Vista, Bentonville, Rogers, Pea Ridge',
    owner: 'Joshua Hastings',
    slogan: 'Professional handyman services at your doorstep!',
    email: 'aaa@abc.com',
    logo: './images/logo.png',
    logoMobile: './images/logo.png',
    address: address("123 Main Street", "City", "ST", "12345", ""),
    contactPrompt: 'What can I help you with?',
    social: {
      //facebook: '',
    }
  });
  

  export default site;