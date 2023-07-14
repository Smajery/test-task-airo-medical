export const checkArr = (array) => {
    return (
        Array.isArray(array) &&
        array &&
        array.length > 0
    );
};