import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Card from './shared/Card/Card';
import FacebookIcon from './shared/Icons/FacebookIcon';
import Input from './shared/Input/Input';
import { getValidations } from './utils/formValidations';
import { getValidationErrors } from './utils/validationErrors';

function App() {


   const [inputValue, setInputValue] = useState(null);

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
         />
         <main>{/* routes :) */}</main>
         <Footer>©2022 Digital Booking</Footer>
      </div>
   );
}

export default App;
