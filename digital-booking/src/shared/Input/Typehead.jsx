import { useRef, useState, useEffect } from 'react';
import PanelOptions from '../PanelOptions/PanelOptions';
import './Input.scss';

export default function Typehead({type, label, name, id, icon, placeholder, isDisabled, validations, setValue, errors, items, maxItemsLength}) {
    const typeheadRef = useRef();
    const [isFocus, setFocus] = useState(false);
    const [isInvalid, setInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [itemsFiltered, setItemsFiltered] = useState(items);
    const [inputValue, setInputValue] = useState('');
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        const clickOutside = (e) => {
            if (searching && typeheadRef.current && !typeheadRef.current.contains(e.target)) {
                setSearching(false);
                handleChange('');
            }
        }

        document.addEventListener("mousedown", clickOutside)
        return () => {
            document.removeEventListener("mousedown", clickOutside)
        }
    }, [searching])

    const handleClick = ($event) => {
        $event.target.select();
    }

    const handleFocus = ($event) => {
        setFocus(true)
    }
    const handleBlur = ($event) => {
        setFocus(false)
    }

    const handleChange = (option) => {
        const isValid = validations.every((validation) => validation(option)) && items.some((item) => item.id === option.id);
        if (isValid) {
            setValue(option.id);
            setInputValue(option.title)
            setInvalid(false);
        } else {
            setErrorMessage(errors.map((validationError) => validationError(option, name)).reduce((messages, error) => `${error}. ${messages} `, ''))
            setInvalid(true);
        }
        setSearching(false)
    }

    const handleInputChange = ($event) => {
        setSearching(true);
        setInputValue($event.target.value)

        if ($event.target.value.length >= 3) {
            const filter = items.filter((item) => item.title.toLowerCase().includes($event.target.value.toLowerCase()))
            setItemsFiltered(filter.length ? filter.slice(0, maxItemsLength) : [{id:'NF', title: 'No se encontraron resultados'}])
        } else {
            setItemsFiltered(items.slice(0, maxItemsLength))
        }
    }


    return (
        <div className="db-input" ref={typeheadRef}>
            {label ? (<label className="db-input-label" htmlFor={id}>{label}</label>) : null}
            <div className={`db-input-wrapper ${isFocus ? 'focus': ''} ${isInvalid ? 'invalid' : ''} ${isDisabled ? 'disabled' : ''}`}>
                <span className="db-input-icon" >
                    {icon}
                </span>
                <input key={id} id={id} type={type} placeholder={placeholder} disabled={isDisabled} value={inputValue} onFocus={handleFocus} onBlur={handleBlur} onClick={handleClick} onChange={handleInputChange} />
            </div>
            {searching ? <PanelOptions items={itemsFiltered} selectOption={handleChange} /> : null}
            {errorMessage && isInvalid ? (<div className="db-input-error">{errorMessage}</div>) : null}
        </div>
    )
}