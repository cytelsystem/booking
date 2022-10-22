import { useRef, useState } from 'react';
import Button from './../../shared/Button/Button';
import PlaceSuggestion from './components/PlaceSuggestion/PlaceSuggestion';
import './Home.scss';

import Input from '../../shared/Input/Input';
import { getValidations } from './../../utils/formValidations';
import { getValidationErrors } from './../../utils/validationErrors';
import FacebookIcon from '../../shared/Icons/FacebookIcon';

const places = [
   {
      city: 'San Carlos de Bariloche',
      country: 'Argentina',
   },
   {
      city: 'Buenos Aires',
      country: 'Argentina',
   },
   {
      city: 'Mendoza',
      country: 'Argentina',
   },
   {
      city: 'Cordoba',
      country: 'Argentina',
   },
];

const Home = () => {
   const [placesShown, setPlaces] = useState(places);
   const [selectedPlace, setSelect] = useState('¿A donde vamos?');

   const buttonsContainer = useRef(null);

   const handleClick = () => {
      console.log(val);
   };

   const handleInputChange = e => {
      setPlaces(
         places.filter(place => {
            const string = e.target.value.toLowerCase();
            return (
               place.city.toLowerCase().includes(string) ||
               place.country.toLowerCase().includes(string)
            );
         })
      );
   };

   return (
      <>
         <section className="searcher">
            <h1>Busca ofertas en hoteles, casas y mucho mas</h1>
            <div className="inputs">
               <Input
                  type={'text'}
                  placeholder={'Escribe tu nombre'}
                  label={'Nombre'}
                  icon={<FacebookIcon />}
                  isDisabled={false}
                  validations={getValidations('text', true)}
                  errors={getValidationErrors('text', true)}
                  // setValue={setInputValue}
               />
               <input
                  onFocus={() => buttonsContainer.current.classList.remove('closed')}
                  onBlur={() => buttonsContainer.current.classList.add('closed')}
                  onChange={handleInputChange}
                  type="text"
                  className="input inputField"
                  placeholder={selectedPlace}
               />
               <div ref={buttonsContainer} className="optionsContainer closed">
                  <div className="placeOptions">
                     {placesShown.map((place, i) => (
                        <PlaceSuggestion key={i} place={place} setPlace={handleClick} />
                     ))}
                  </div>
               </div>
               <Button classList={'inputField'}>Check in - Check out</Button>
               <Button classList={'searchButton db-button-primary'}>Buscar</Button>
            </div>
         </section>
         <section className="types">
            <h2>Buscar por tipo de alojamiento</h2>
            <article className="typeCards"></article>
         </section>
         <section className="recomendations">
            <h2>Recomendaciones</h2>
            <article className="typeCards"></article>
         </section>
      </>
   );
};

export default Home;
