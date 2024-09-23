// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

/* Can be either valid or invalid
I added a sixth mystery card which starts with 9 to test the 'Company not found' part */
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const mystery6 = [9, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]; 

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6];

const validateCred = myArray => {
    const arrayCopy = myArray.slice(); // this ensures that original credit card numbers don't mutate. All operations will be done on the copy!
  
    /* for loop which starts iterating from the right. 
    It starts doubling every other number starting from the number that's second from the right. */
    for (let i= arrayCopy.length-2; i >= 0; i -= 2) {
      arrayCopy[i] *= 2;
      if (arrayCopy[i] > 9) {
          arrayCopy[i] -= 9;
      };
    };
  
    // adding up all the numbers within the mutated array
    const arraySum = arrayCopy.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  
    if (arraySum % 10 === 0) {
      return true;
    } else return false;
  }; 

// testing the card validation function. 

console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));

console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));

console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));
console.log(validateCred(mystery6));

/* Task 4. Function to check through the nested array for which 
numbers are invalid, and return another nested array of invalid cards. */

const findInvalidCards = nestedArray => {
    const falseCards = nestedArray.filter(value => {
      return validateCred(value) === false;
    });
    return falseCards;
  };
  
console.log(findInvalidCards(batch)); // testing the function to return all the incorrect credit cards

// Task 5. Function that is returning an array of companies which have invalid cards. 

const idInvalidCardCompanies = invalidArray => {
    const invalidCompanies = [];
    for (let card of invalidArray) { 
      switch (card[0]) {
        case 3:
          if(!invalidCompanies.includes('Amex (American Express)')) { // only pushes a card company if it's not yet in the array.
            invalidCompanies.push('Amex (American Express)');}
          break;
        case 4:
          if(!invalidCompanies.includes('Visa')) {
              invalidCompanies.push('Visa');}
          break;
        case 5: 
          if(!invalidCompanies.includes('MasterCard')) {
              invalidCompanies.push('MasterCard');}
          break;
        case 6: 
          if(!invalidCompanies.includes('Discover')) {
             invalidCompanies.push('Discover');}
          break;
        default: 
            invalidCompanies.push('Company not found');
          };
        };
      return invalidCompanies;
    };

console.log(idInvalidCardCompanies(findInvalidCards(batch))); // testing the function to bring out all the card companies behind invalid cards.

// Extra task #1. Function that accepts a string and converts it into an array of numbers
const turnToArray = numString => {
    const numArray = numString.split('').map(Number);
    return numArray;
  };
  
console.log(turnToArray("4532778771091894")); // testing the function to turn a string of numbers into a correctly formated array of numbers.


// Extra task #2. Function that converts invalid credit card numbers into valid numbers. 

const makeValid = card => {
    const arrayCopy = card.slice(); // again, creating a copy in order to mutate the array.
    for (let i= arrayCopy.length-2; i >= 0; i -= 2) {
      arrayCopy[i] *= 2;
      if (arrayCopy[i] > 9) {
          arrayCopy[i] -= 9;
      };
    };
  
    const arraySum = arrayCopy.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    });
  
    const modulo = arraySum % 10;
    const checkDigit = card[card.length - 1];
    const adjustment = (10 - modulo) % 10;
    card[card.length - 1] = (checkDigit + adjustment) % 10;
    return card;
  };

// Testing the extra task #2 (turning invalid cards to valid)
console.log(makeValid(invalid1));
console.log(makeValid(invalid2));
console.log(makeValid(invalid3));
console.log(makeValid(invalid4));
console.log(makeValid(invalid5));

console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));

console.log(makeValid(mystery1));
console.log(makeValid(mystery2));
console.log(makeValid(mystery3));
console.log(makeValid(mystery4));
console.log(makeValid(mystery5));
console.log(makeValid(mystery6));

console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));
console.log(validateCred(mystery6));