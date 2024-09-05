import './css/Footer.css';
import Linkedin from './assets/socials/linkedin.svg';
import Github from './assets/socials/github.svg';
import Instagram from './assets/socials/instagram.svg';

function Footer() {
  return (
    <footer >


<div className='contact' id='contact'>
        <div className='contact__socials'>
         <a className='contact__socials--link' href="https://www.linkedin.com/in/witze-van-der-straeten-705731193/"><img src={Linkedin} alt="" /></a>
       <a   className='contact__socials--link' href="https://www.instagram.com/witzevds/"><img src={Instagram} alt="" /></a>
         <a className='contact__socials--link' href="https://github.com/Witzevds"><img src={Github} alt="" /></a>

         </div>
        </div>
    </footer>
  );
}
export default Footer;