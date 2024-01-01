export function formatDate(userdate = new Date, formatter = '-') {
    console.log(userdate);
    const date = new Date(userdate);
    console.log(date);

    const day = date?.getDate();
    const month = date?.getMonth() + 1;
    const year = date?.getFullYear();

    return (`${day < 10 ? '0' + day : day}${formatter}${month < 10 ? '0' + month : month}${formatter}${year}`);
}

export function getMinimumDate(minDate, minMonth, minYear = 2020) {
    const date = new Date();
    const day = date?.getDate();
    const month = date?.getMonth() + 1;

    date.setDate(minDate || day);
    date.setMonth(minMonth || month);
    date.setFullYear(minYear || 2020);

    return date;
}