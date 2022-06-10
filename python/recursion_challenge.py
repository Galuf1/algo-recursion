import re
def factorial(x):
	if x == 1:
		return 1
	return x * factorial(x-1)

def palindrome(word):
	clean_word = (re.sub('[^a-zA-Z0-9]','',word))
	original_word = list(clean_word.lower())
	
	if len(original_word) == 1:
		return True
	else:
		if original_word[0] == original_word[-1]:
			return palindrome("".join(original_word[1:-1]))
	return False

def to_roman(num):
	roman_to_arabic = {
        "I":1,
        "IV":4,
        "V":5,
        "IX":9,
        "X":10,
        "XL":40,
        "L":50,
        "XC":90,
        "C":100,
        "CD":400,
        "D":500,
        "CM":900,
        "M":1000,
    }

	if num == 0:
		return ''
	else:
		for key,value in reversed(roman_to_arabic.items()):
			while num >= value:
				return key + to_roman(num-int(value))


