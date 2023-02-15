export const MaxLength = (lengthValue,todoLists) => (value) => {
    let error
    if (!value) {
        error = ' '
    } else if (todoLists && todoLists.length >= 10) {
        error = `Maximum number of lists`
    }else if (value.length > lengthValue) {
        error = `Must be less than ${lengthValue} characters`
    }
    return error
}
export const validateRequired =
    (lengthValue = 1) =>
        (value) => {
            let error
            if (!value) {
                error = 'Required'
            } else if (value.length < lengthValue) {
                error = `Must be ${lengthValue} characters or more`
            }
            return error
        }