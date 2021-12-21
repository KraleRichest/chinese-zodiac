

let inputYear = prompt("Enter year of birth");
let parcedYear = parseInt(inputYear);

if (!isNaN(parcedYear) && parcedYear >= 1900 && parcedYear <= 2021) {
    let zodiac = (parcedYear - 4) % 12;
    if (zodiac === 0){
        alert("You are Rat");
    } else if (zodiac === 1) {
        alert("You are Ox");
    } else if (zodiac === 2) {
        alert("You are Tyger");
    } else if (zodiac === 3) {
        alert("You are Rabbit");
    } else if (zodiac === 4) {
        alert("You are Dragon");
    } else if (zodiac === 5) {
        alert("You are Snake");
    } else if (zodiac === 6) {
        alert("You are Horse");
    } else if (zodiac === 7) {
        alert("You are Goat");
    } else if (zodiac === 8) {
        alert("You are Monkey");
    } else if (zodiac === 9) {
        alert("You are Rooster");
    } else if (zodiac === 10) {
        alert("You are Dog");
    } else if (zodiac === 11) {
        alert("You are Pig"); 
    } else {
        alert("Enter valid year");
    }
} else {
    alert("Please enter valid year")
}