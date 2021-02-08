//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
   let newString = str;

   for(let i = 1; i < newString.length; i++) {
      if(newString[i - 1] == " ") {
         newString = newCapitalizer(newString, i);
      }
   }
   newString = newString.split(" ").join("");

   return newString;
}

function newCapitalizer(str, position) {
   return str.substr(0, position) + str.charAt(position).toUpperCase() + str.substr(position + 1, str.length-1);
}