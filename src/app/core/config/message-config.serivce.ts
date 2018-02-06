
export function minlengthValidationMessage(err, field) {
    return `至少${field.templateOptions.minLength}个字符`;
}

export function maxlengthValidationMessage(err, field) {
    return `不能超过${field.templateOptions.maxLength}个字符`;
}

export function minValidationMessage(err, field) {
    return `应小于${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
    return `不能大于${field.templateOptions.max}`;
}
