function isRequiredValidation(value) {
    return value !== null && value !== '';
}

function passwordValidation(value) {
    return value.length > 8 ;
}

export function getValidations(type, isRequired) {
    let validations = isRequired ? [isRequiredValidation] : [];

    switch (type) {
        case 'text':
            break;
        case 'password': 
            validations = [...validations, passwordValidation]
        default:
            break;
    }


    return validations;
}

