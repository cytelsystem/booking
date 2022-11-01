import gsap from 'gsap';
import { useState } from 'react';
import HamburgerIcon from '../../../shared/Icons/HamburgerIcon';
import SideNav from '../SideNav/SideNav';
import './HeaderMenu.scss';

export default function HeaderMenu() {
   const [closeSideNav, setCloseSideNav] = useState(true);

   const closeSidePanel = () => {
      gsap.to('.db-side-panel', { xPercent: 100, ease: 'power2.in' });
   };

   const openSidePanel = () => {
      gsap.to('.db-side-panel', { xPercent: -100, ease: 'power2.out' });
   };

   return (
      <div className="db-header-menu">
         <div onClick={openSidePanel}>
            <HamburgerIcon />
         </div>
         <SideNav close={closeSidePanel} />
      </div>
   );
}
