import { useState } from 'react';
import { getValidationErrors } from '../../utils/validationErrors';
import './Input.scss';

export default function Input({type, label, id, icon, placeholder, isDisabled, validations, setValue, errors}) {
    const [isFocus, setFocus] = useState(false);
    const [isInvalid, setInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFocus = ($event) => {
        setFocus(true)
    }
    const handleBlur = ($event) => {
        setFocus(false)
    }

    const handleChangeInput = ($event) => {
        const isValid = validations.every((validation) => validation($event.target.value));
        if (isValid) {
            setValue($event.target.value);
            setInvalid(false);
        } else {
            setErrorMessage(errors.map((validationError) => validationError($event.target.value, label)).reduce((messages, error) => `${error}. ${messages} `, ''))
            setInvalid(true);
        }
    }


    return (
        <div className="db-input">
            {label ? (<label className="db-input-label" htmlFor={id}>{label}</label>) : null}
            <div className={`db-input-wrapper ${isFocus ? 'focus': ''} ${isInvalid ? 'invalid' : ''} ${isDisabled ? 'disabled' : ''}`}>
                <span className="db-input-icon" >
                    {icon}
                </span>
                <input key={id} id={id} type={type} placeholder={placeholder} disabled={isDisabled} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChangeInput} />
            </div>
            {errorMessage && isInvalid ? (<div className="db-input-error">{errorMessage}</div>) : null}
        </div>
    )
}