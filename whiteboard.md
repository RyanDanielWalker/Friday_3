* if an inputted number contains a 1, all digits are replaced with "Beep!"
* If an inputted number contains a 2, all digits are replaced with "Boop!"
* if an inputted number contains a 3, all digits are replaced with "Won't you be my neighbor?"


The program will gather inputted number from user. <!--- parseInt(inputNumber) --->
The program will replace 1, 2, and 3 with new values.
3 will over-ride 2 + 1
2 will over-ride 1


test: "It should gather user inputted number into array as strings"
code:
expected result: return numberArray <!-- Technically passed, need to not allow letters.



test: "It should return "Beep!" if number 1 is inputted"
code:
expected result: "Beep!"<!-- console logged "beep" while all other numbers remained.>

test: "It should return "Boop!" if number 2 is inputted"
code:
expected result: "Boop!"<!-- console logged "boop" while "won't you be my neighbor" remained.>

test: "It should return "Won't you be my neighbor?" if 3 is inputted.
code:
expected result: "Won't you be my neighbor?"<!-- console logged "Won't you be my neighbor">

test: "It should not allow anything but numbers to be inputted"
code:
expected result: alert "Please enter a number"<!-- jQuery>

test: "It should prioritize 3's response over 2 and 1
code:
expected result: return "Won't you be my neighbor"<!-- passed>

test: "It should replace all digits if conditions for 3 || 2 || 1 are met<!-- passed>
code:
expected result: 

