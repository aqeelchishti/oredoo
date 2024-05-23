
export const dateFormat = (inputDate) => {
    const date = new Date(inputDate);
    const fDate = new Intl.DateTimeFormat('en-us', {
        month: "long", day: "numeric", year: "numeric"
    });

    return fDate.format(date);
};