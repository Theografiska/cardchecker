This program helps to validate credit card numbers by using the Luhn algorithm. https://en.wikipedia.org/wiki/Luhn_algorithm#Description

Function validateCred() returns true when an array contains digits of a valid credit card number and false when it is invalid, without mutating the original array values. 

Function findInvalidCards() checks through the nested array for which numbers are invalid, and returns another nested array of invalid cards.

Function idInvalidCardCompanies() identifies the credit card companies that have possibly issued these fauly numbers. (Each company can appear only once in the returned array of companies.)

Function turnToArray() turns a string of numbers into an array of numbers.

Function makeValid changes the digit index of invalid credit card numbers to correct. 
