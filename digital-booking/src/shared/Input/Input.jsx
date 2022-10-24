import { useEffect, useId, useRef, useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import './Input.scss';

export default function InputExper({
   type,
   label,
   name,
   id,
   icon,
   placeholder,
   isDisabled,
   validations,
   setValue,
   errors,
}) {
   const [isFocus, setFocus] = useState(false);
   const [isInvalid, setInvalid] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const inputRef = useRef();

   const inputId = useId();

   const handleFocus = $event => {
      setFocus(true);
   };
   const handleBlur = $event => {
      setFocus(false);
   };

   const handleChangeInput = $event => {
      const isValid = validations.every(validation => validation($event.target.value));
      if (isValid) {
         setValue($event.target.value);
         setInvalid(false);
      } else {
         setErrorMessage(
            errors
               .map(validationError => validationError($event.target.value, name))
               .reduce((messages, error) => `${error}. ${messages} `, '')
         );
         setInvalid(true);
      }
   };

   useEffect(() => {
      const input = inputRef.current.firstChild;
      if (input) {
         input.addEventListener('focus', handleFocus);
         input.addEventListener('blur', handleBlur);
      }

      return () => {
         if (input) {
            input.removeEventListener('focus', handleFocus);
            input.removeEventListener('blur', handleBlur);
         }
      };
   }, []);

   return (
      <div className="db-input">
         {label ? (
            <label className="db-input-label" htmlFor={id}>
               {label}
            </label>
         ) : null}
         <div
            className={`db-input-wrapper ${isFocus ? 'focus' : ''} ${isInvalid ? 'invalid' : ''} ${
               isDisabled ? 'disabled' : ''
            }`}>
            {icon ? <span className="db-input-icon">{icon}</span> : null}
            {type === 'date-picker' ? (
               <DatePicker
                  onChange={setValue}
                  ref={inputRef}
                  placeholder={placeholder}
                  plugins={[<DatePanel />]}
                  range
               />
            ) : (
               <input
                  key={id}
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  disabled={isDisabled}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChangeInput}
               />
            )}
         </div>
         {errorMessage && isInvalid ? <div className="db-input-error">{errorMessage}</div> : null}
      </div>
   );
}
