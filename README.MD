#THIS IS AN EXERCISE IN CONVERTING NUMBERS INTO ROMAN NUMERALS.

###Enter a number and have it displayed as a roman numeral.

####I've done this task two different ways, just to see which was best.
####The first seemed a bit basic, but ended up being shorter and more logical in my opinion.

####Version 1
*Take the number from input1
*pass it through a series of "while" staements. Whitle it down from the largest numeral down to the smallest. At every step, "push" a roman numeral to an array and subtract the amout from the number until the number is depleted.
*the numeral array is then "join"ed and displayed.

####Version2
*Take the number and "split" it and "reverse"
*use a series of "switch" commands to asign the appropriate numeral for that character.
*numeral is "unshifted" to an array.

####Version3
*set out an array for all the numerals as seen above
*for loop cycles through each index of the given number array
*at each cycle it selects the correct numeral
*As with the other versions, the Numeral array is then joined and displayed
on-screen.  This is far more efficient, at around 50 lines of code -
better than method 2 which is around 180 lines.

####Version4
* Combining the approach of the first version with the programming logic of
the third.
* Make two arrays to be referenced. One of numeral character types,
and another of their corresponding values as numbers.
* For loop cycles through the number array and checks - "while" the given number is larger then each index of the array,
add the relevent numeral and subtract that value from the given number.
* If the given number is less than the value of that index of the number array then it moves on to the next one until down to 0.
* This is far simpler and concise than the previous 3 versions.
* I also changed the large value numerals are displayed.  In the previous examples,
the overline was created using the "uni-code" method. This sometimes left the over-line,
or "Vinculum", was sometimes left with a space in the middle. I corrected this by seperating
the resulting numerals into 2 seperate indexes of an array.  Values over 4000 and those under.
Then when the results are displayed it's easy to style with a "text-decoration" command.


####Converting back to numbers
* Take a string of letters and convert it to numbers using the principles of Roman Numerals.
use Regex to filter the input for the correct characters.
* Capitalise and split the string into an array of characters.
join together the characters, for example X and C to make XC(90).
numerals need to pass many tests to establish if they are in the correct order.
* Changing the numerals into numbers is by far the easiest part of this excerise.
* Descerning the correct characters and order of the characters involved requires many different actions.
* For example, the numerals must be in descending order. Also, certain values can't repeat and can only be followed
by other values.  A 90(XC) can't be folllowed by 50(L).
