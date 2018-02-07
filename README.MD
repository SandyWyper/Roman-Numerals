##THIS IS AN EXERCISE IN CONVERTING NUMBERS INTO ROMAN NUMERALS.

#Enter a number and have it displayed as a roman numeral.

#I've done this task two different ways, just to see which was best.
#The first seemed a bit basic, but ended up being shorter and more logical in my opinion.

#Version 1
*Take the number from input1
*pass it through a series of "while" staements. Whitle it down from the largest numeral down to the smallest. At every step, "push" a roman numeral to an array and subtract the amout from the number until the number is depleted.
*the numeral array is then "join"ed and displayed.

#Version2
*Take the number and "split" it and "reverse"
*use a series of "switch" commands to asign the appropriate numeral for that character.
*numeral is "unshifted" to an array.
