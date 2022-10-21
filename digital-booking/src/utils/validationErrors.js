function isRequiredValidationError(value, name) {
    return value !== null && value !== '' ? '' :`El campo ${name} es obligatorio`;
}

export function getValidationErrors(type, isRequired) {
    let validations = isRequired ? [isRequiredValidationError] : [];

    switch (type) {
        case 'text':
            break;
        default:
            break;
    }


    return validations;
}