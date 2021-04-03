# _Mr. Robogers' Neighborhood_


**By Ryan Walker**

A program designed to teach users how to count like Mr. Robogers does. 

## Technologies Used

1. HTML
2. CSS
3. Bootstrap
4. Javascript
5. jQuery
6. VS Code
7. Adobe Photoshop

## Description

This program will give the user an insight into the inner workings of Mr. Robogers' wonderful brain... Er... Central Processing Unit?? The user can choose a number and Mr. Robogers will demonstrate how he counts to that number. 

## Requirements

* Visit this website: [Project Website](https://ryandanielwalker.github.io/Friday_3)
* Enter a number between 1 & 1000 into the box when prompted.
* Click 'Submit'.
* Watch as Mr. Robogers counts away!
* You may enter as many numbers as you like, as long as they meet the programs requirements.  

*To download this application for personal use, you may clone from this repository:* [GitHub](https://github.com/RyanDanielWalker/Friday_3)

## Specifications
### Describe mrRobogersSays()
Test: "It should iterate over number inputted from user and push iteration into an array as strings."\
Code:\
userInput = number
mrRobogersSays(userInput)\
Expected Output: array of "numbers" 

Test: "It should find all elements within string array that include "3", substitute them with "Won't you be my neighbor?" and push the manipulated element to a new array."\
Code:\
numberArray.forEach(function(element){\
    if (element.includes("3")) {\
      resultArray.push(" Won't you be my neighbor?")}\
Expected Output: "3" replaced with " Won't you be my neighbor?"

Test: "It should find all elements within string array that include "2", substitute them with "Boop!" and push the manipulated element to a new array."\
Code:\
numberArray.forEach(function(element){\
    if (element.includes("2")) {\
      resultArray.push(" Boop!")}\
Expected Output: "2" replaced with " Boop!"

Test: "It should find all elements within string array that include "1", substitute them with "Beep!" and push the manipulated element to a new array."\
Code:\
numberArray.forEach(function(element){\
    if (element.includes("1")) {\
      resultArray.push(" Beep!")}\
Expected Output: "1" replaced with " Beep!"

Test: "It should prioritize rules for "3" above "2" && "1"; Rules for "2" above "1" \
Code:\
numberArray.forEach(function(element))\
Expected Output: numbers containing 3 && 2 || 3 && 1 || 3 & 2 & 1 showing only rules for 3. Numbers containing 2 && 1 showing only rules for 2

Test: "It should return the results of only the newest manipulated array to user"\
Code:  
mrRobogersSays()\
return resultArray\
Expected Output: manipulated array elements displayed as strings.


## Known Bugs

There are no bugs 

## License 
MIT 

Copyright (c) 2021 Ryan Walker

*I do not own anything seen here, please feel free to do with this code what your beautiful heart desires!*

## Contact Information
[Ryandanielwalker@gmail.com](mailto:ryandanielwalker@gmail.com)




