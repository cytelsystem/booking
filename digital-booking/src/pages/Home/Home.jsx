import { useEffect, useState } from 'react';
import './Home.scss';
import LocationIcon from '../../shared/Icons/locationIcon';
import Categories from './components/Categories/Categories';
import Recomendations from './components/Recomendations/Recomendations';
import Searcher from './components/Searcher/Searcher';
import gsap from 'gsap';

var options = [
   {
      id: 'PTO',
      icon: <LocationIcon />,
      title: 'Pasto - Nariño',
      subtitle: 'Colombia',
   },
   {
      id: 'CTA',
      icon: <LocationIcon />,
      title: 'Cartagena de Indias - Bolivar',
      subtitle: 'Colombia',
   },
   {
      id: 'MDE',
      icon: <LocationIcon />,
      title: 'Medellin - Antioquia',
      subtitle: 'Colombia',
   },
];

const product = {
   image: {
      url: 'https://construccionesprisma.com.co/images/apartment_photos/22_41_pradoalto97.5m201.jpg',
      productName: 'apto1',
   },
   info: {
      title: 'Title',
      category: 'Departamentos',
      points: 8,
      textRate: 'Muy bueno',
      distance: 'A 900 m del centro',
      amenities: ['wifi', 'pool'],
      description:
         'En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires.',
   },
};

const category = {
   name: 'Hoteles',
   quantity: 807105,
   image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

const categories = [category, category, category, category];
const products = [product, product, product, product];

const Home = () => {
   const [selectedPlace, setPlace] = useState(null);
   const [selectedDate, setDate] = useState(null);

   useEffect(() => {
      const categoriesAnimations = gsap.from('#home .categories .cards > a', {
         duration: 0.5,
         opacity: 0,
         yPercent: 20,
         stagger: 0.1,
         ease: 'power2.out',
      });

      const recomendationsAnimations = gsap.from('#home .recommendations .cards .db-card', {
         duration: 0.5,
         opacity: 0,
         scale: 0.6,
         stagger: 0.2,
         ease: 'power2.out',
      });
      return () => {
         recomendationsAnimations.revert();
         categoriesAnimations.revert();
      };
   }, []);

   return (
      <div id="home">
         <Searcher setDate={setDate} setPlace={setPlace} typeHeadOptions={options} />
         <Categories categories={categories} />
         <Recomendations products={products} />
      </div>
   );
};

export default Home;
