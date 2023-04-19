function chooseRandomNumberFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Example usage
const anotherArray =['Opt3 rbloption','Opt1 rbloption', 'Opt4 rbloption', 'Opt2 rbloption']
const myArray = [1, 3, 5, 7];
const randomNumber = chooseRandomNumberFromArray(anotherArray);




// await radioInput.click();
console.log(randomNumber);