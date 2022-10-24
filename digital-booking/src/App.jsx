import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';
import Card from './shared/Card/Card';
import FacebookIcon from './shared/Icons/FacebookIcon';
import PoolIcon from './shared/Icons/PoolIcon';
import WifiIcon from './shared/Icons/WifiIcon';
import Input from './shared/Input/Input';
import Typehead from './shared/Input/Typehead';
import { getValidations } from './utils/formValidations';
import { getValidationErrors } from './utils/validationErrors';
import { router } from './core/Routes';

function App() {
   const [inputValue, setInputValue] = useState(null);
   const [typeheadValue, setTypeheadValue] = useState(null);

   const product = {
      image: {
         url: 'https://construccionesprisma.com.co/images/apartment_photos/22_41_pradoalto97.5m201.jpg',
         productName: 'apto1',
      },
      info: {
         title: 'Title',
         category: 'Departamentos',
         points: 8,
         textRate: 'muy bueno',
         distance: 'A 900 m del centro',
         amenities: [
            {
               icon: <WifiIcon />,
               label: 'Wi-Fi',
            },
            {
               icon: <PoolIcon />,
               label: 'Pool Service',
            },
         ],
         description:
            'En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires.',
      },
   };

   return (
      <div id="app">
         {/* <Card>Esto es una card</Card>
         <Input
            type={'date'}
            placeholder={'Escribe tu nombre'}
            label={'Nombre'}
            icon={<FacebookIcon />}
            isDisabled={false}
            validations={getValidations('text', true)}
            errors={getValidationErrors('text', true)}
            setValue={setInputValue}
            name={'Nombre'}
         />
         <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-evenly' }}>
            <ProductCard  product={product} />
            <ProductCard product={product} />
         </div> */}
         <main>
            <RouterProvider router={router} />
         </main>
         <Footer>©2022 Digital Booking</Footer>
      </div>
   );
}

export default App;
