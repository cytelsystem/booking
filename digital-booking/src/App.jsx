import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Card from './shared/Card/Card';
import FacebookIcon from './shared/Icons/FacebookIcon';
import Input from './shared/Input/Input';
import Typehead from './shared/Input/Typehead';
import { getValidations } from './utils/formValidations';
import { getValidationErrors } from './utils/validationErrors';

var options = [
   {
      id: 'CTE',
      icon: <FacebookIcon/>,
      title: 'Cartagena de Indias - Bolivar',
      subtitle: 'Colombia'
   },
   {
      id: 'MDE',
      icon: <FacebookIcon/>,
      title: 'Medellin - Antioquia',
      subtitle: 'Colombia'
   }
]

function App() {


   const [inputValue, setInputValue] = useState(null);
   const [typeheadValue, setTypeheadValue] = useState(null);

   return (
      <div id="app">
         {/* here goes the header :) */}
         <Card>
            Esto es una card
         </Card>
         <Input 
            type={'text'} 
            placeholder={'Escribe tu nombre'} 
            label={'Nombre'} 
            icon={<FacebookIcon/>}
            isDisabled={false}
            validations={getValidations('text', true)} 
            errors={getValidationErrors('text', true)} 
            setValue={setInputValue}
            name={'Nombre'}
         />

         <Typehead
            type={'text'} 
            placeholder={'¿A donde vamos?'}
            icon={<FacebookIcon/>}
            isDisabled={false}
            validations={getValidations('typehead', true)} 
            errors={getValidationErrors('typehead', true)} 
            setValue={setTypeheadValue}
            items={options}
            maxItemsLength={1}
            name={'Destino'}
         />
         <main>{/* routes :) */}</main>
         <Footer>©2022 Digital Booking</Footer>
      </div>
   );
}

export default App;
