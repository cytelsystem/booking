function isRequiredValidation(value) {
    return value !== null && value !== '';
}

export function getValidations(type, isRequired) {
    let validations = isRequired ? [isRequiredValidation] : [];

    switch (type) {
        case 'text':
            break;
        default:
            break;
    }


    return validations;
}

