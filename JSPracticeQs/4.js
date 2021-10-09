// Write a JS program to get the current date.
// mm-dd-yyyy , mm/dd/yyyy / dd-mm-yyyy , dd/mm/yyyy

const formatDate =(date = new Date()) =>{
    const dates = date.getDate() +1;
    const months = date.getMonth() +1;
    const years = date.getFullYear();
    return `${dates}/${months}/${years}`;
}

console.log(formatDate());