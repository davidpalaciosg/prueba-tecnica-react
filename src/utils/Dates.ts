export const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay() + 1;
    return `${year}-${month}-${day}`;
};

//Returns true if date1 is before date2
export const isBefore = (date1: Date, date2: Date) => {
    return date1.getTime() < date2.getTime();
}