//modtager 2 datoer i en string. Deler den i start og slut dato.
//derefter "deles" datoerne op i start-dag og -måned, og slut-dag og -måned samt år.
//månederne laves til en string på dansk med det fulde månedsnavn.
//så sættes variablerne sammen til en dansk dato i convertedDate, som retuneres
//koden er modifiseret fra https://github.com/Kanin60/Mediesuset/blob/main/src/helpers/convertDate.js
export function dateconverter(date) {
    let newDate = new Date(date);

    let day = newDate.getDate();
    let month = newDate.toLocaleString('da-DK', { month: 'long' });
    let year = newDate.getFullYear();

    return `${day}. ${month} ${year}`


}