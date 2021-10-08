const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// var len = str.length;
// console.log(len)
// This will show the length of the string.

// var lowCase = str.toLowerCase();
// console.log(lowCase)
// This will convert all the characters of a string to lower case.

// var upperCase = str.toUpperCase();
// console.log(upperCase)
// This will convert all the characters of a string to upper case.

// var include = str.includes("Hello")
// console.log(include)
// This will check if the string contains the word we pass within (). This function is case sensitive.

// var start = str.startsWith("Lorem");
// console.log(start)
// This will check if the given sting starts with the word we pass within (). This function is case sensitive.

// var end = str.endsWith("laborum.");
// console.log(end)
// This will check if the given sting ends with the word we pass within (). This function is case sensitive.

// var search = str.search("amet")
// console.log(search)
// This will  search the index of the word within () in the given string. This function is case sensitive.

// var match = str.match("amet")
// console.log(match)
// This is same  as search but will return an array which contains the word , index, input string, group.

// var index= str.indexOf("amet")
// console.log(index)
// This will return the index of the first appearance of the word in the input string.

// var lastIndex = str.lastIndexOf("amet")
// console.log(lastIndex)
// This will return the index of the last appearance of the word in the input string.

// var replace = str.replace("Lorem", "Hello")
// console.log(replace);
// This will replace any word we want with some other word. This function will take two inputs. First will be the word we want to change and the second the word  to change to.

// const  str = "           Hello           "
// var trim = str.trim();
// console.log(trim)
// This will remove any extra spaces in the string.

// var charAt = str.charAt(15)
// console.log(charAt)
// This will return the character of the string at the given position.inside ().

// var charCodeAt = str.charCodeAt(12)
// console.log(charCodeAt)
// This will return the character code of the index we specified in ().

// var a = String.fromCharCode(100)
// console.log(a)
// This function will return the character whose unique code we specified in (). This function will not take any input string. There is an inbuilt String that we need to specify.

// const str1 = "Hello, I am"
// const str2 = " learning JS string methods"
// var concat = str1.concat(str2);
// console.log(concat);
// This will merge(concat) two or more strings together and return the merged(concatenated) string.

// var split = str.split(" ");
// console.log(split);
// This will split the string into separate strings and return an array of strings.

// const str3 = "Hello World ! "
// var repeat = str3.repeat(3);
// console.log(repeat);
// This will copy paste the string the number of times we want.

// var slice = str.slice(3, 10)
// console.log(slice);
// This will take two parameters and will return the string in between the parameters. If we pass only one parameter, it will return the rest of the string from the character of that string.

// var subStr = str.substr(2, 5)
// console.log(subStr);
// This is similar to slice and will return all the characters in between the parameters we pass.

// var subString = str.substring(2, 5)
// console.log(subString);
// This is similar to slice and substr and will return all the characters in between the parameters we pass.

// const str4 = 50;
// var a = str4.toString();
// console.log(20 + a)
// This will convert any data types to string.

// var valueOf = str.valueOf();
// console.log(valueOf);
// This will return the value of the string we pass.