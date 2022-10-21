import { useEffect, useRef } from 'react';
import LocationIcon from '../../../../shared/Icons/locationIcon';
import './PlaceSuggestion.scss';

const PlaceSuggestion = ({ place, setPlace }) => {
   const container = useRef();

   useEffect(() => {
      container.current.onclick = () => {
      };

      console.log(container.current.onclick);
      container.current.click()
   }, []);

   return (
      <div ref={container} className="container">
         <div className="icon">
            <LocationIcon />
         </div>
         <div className="data">
            <p className="city">{place.city}</p>
            <p className="country">{place.country}</p>
         </div>
      </div>
   );
};

export default PlaceSuggestion;
