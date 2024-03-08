//modtager 1 dato i en string. 
//derefter "deles" datoerne op i dag og måned og samt år.
//månederne laves til en string på dansk med det fulde månedsnavn.
// day, month og year retuneres
//tilpasset fra https://github.com/Kanin60/Det-utrolige-teater/blob/main/src/helpers/dateConverter.jsx
export function dateconverter(date) {
    let newDate = new Date(date);

    let day = newDate.getDate();
    let month = newDate.toLocaleString('da-DK', { month: 'long' });
    let year = newDate.getFullYear();

    return `${day}. ${month} ${year}`


}