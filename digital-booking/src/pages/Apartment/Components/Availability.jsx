import { useEffect } from 'react';
import { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { months, weekDays } from '../../../utils/spanishCalendar';

const Availability = () => {
   const [isMobile, setIsMobile] = useState(null);

   useEffect(() => {
      const changeCalendar = () => {
         setIsMobile(window.matchMedia('(width < 600px)').matches ? true : false);
      };

      changeCalendar();

      window.addEventListener('resize', changeCalendar);

      return () => {
         window.removeEventListener('resize', changeCalendar);
      };
   }, []);

   return (
      <section className="db-apartment-availability">
         <SectionTitle>Fechas disponibles</SectionTitle>
         <Calendar
            numberOfMonths={isMobile ? 1 : 2}
            weekDays={weekDays}
            months={months}
            shadow={false}
         />
      </section>
   );
};

export default Availability;
