import './Footer.scss';
import FacebookIcon from '../../shared/Icons/FacebookIcon';
import LinkedInIcon from '../../shared/Icons/LinkedInIcon';
import InstagramIcon from '../../shared/Icons/InstagramIcon';
import TwitterIcon from '../../shared/Icons/TwitterIcon';

const Footer = () => {
   return (
      <footer>
         <article className="leftSide">
            <p>©2022 Digital Booking</p>
         </article>
         <article className="rightSide">
            <a href="#">
               <FacebookIcon />
            </a>
            <a href="#">
               <LinkedInIcon />
            </a>
            <a href="#">
               <TwitterIcon />
            </a>
            <a href="#">
               <InstagramIcon />
            </a>
         </article>
      </footer>
   );
};

export default Footer;
