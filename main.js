// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true


function palindromo(frase) {

    frase = frase.replace(/\W/g, "");
    let splitted = frase.split("").reverse().join("");
    
    
    if(frase == splitted) {
        return true;
    }else {
        return false;
    }
}

console.log(palindromo("i topi non avevano nipoti"));
