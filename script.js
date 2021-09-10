// Exercise-1 --> Write a function to filter out falsy values from array.

let removeFalsyValues = [33,'salam',true,null,false,0];
removeFalsyValues.pop();
removeFalsyValues.pop();
removeFalsyValues.pop();
console.log(removeFalsyValues);

// Exercise-2 --> Write a function to get a random element from array.

let getRandomValues = [33, "salam", true, null, false, 0];
const random = Math.floor(Math.random() * getRandomValues.length);
console.log(getRandomValues[random]);

// Exercise-3 --> Write a function to remove duplicate values from an array.

let removeDuplicates = [1, 123, 33, 45, 66, 45, 123, 1];
let unique = removeDuplicates.filter((n, index) => { return removeDuplicates.indexOf(n) === index; });
console.log(unique);

// Exercise-4 --> Write a function to remove a given values from an array.

let removeFromArray = [1, 123, 33, 45, 66];
function remove(arr, value) {
  return arr.filter(function (val) {
    return val != value;
  });
}
console.log(remove(removeFromArray, 45));

// Exercise-5 --> Write a function to get the month name from a particular date.

let getMonthName = new Date("10/11/2009");
let monthsNames = function (date) {
  // prettier-ignore
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()];
};
console.log(monthsNames(getMonthName));

// Exercise-6 --> Write a function to get the number of days in a month.

// prettier-ignore
let getNumberOfDays = (month, year) => { return new Date(year, month, 0).getDate(); };
console.log(getNumberOfDays(5, 2020));

// Exercise-7 --> Write a function which return copyright text with current year.

let date = new Date();
let currentyear = date.getFullYear();
let renderCopyRight = "Copyright © " + currentyear + ". All Rights Reserved.";
console.log(renderCopyRight);

// Exercise-8 --> Write a function to check whether a given date is a weekend or not.

let date = new Date('Dec 21, 2020');
let currentday = date.getDay();
let isWeekend = (currentday === 6) || (currentday === 0);
if (isWeekend == true) {
    console.log("true");
} else {
    console.log("false");
}

// Exercise-9 --> Write a function to calculate the percentage (%) of a total number from given.

let percentage = (num,per) => { return (per*100)/num; };
console.log(percentage(2345, 190).toFixed(2) + "%");

// Exercise-10 --> Write a function to truncate a text to a certain number of words.

let truncate = (sentence, count) => { return sentence.split(" ").splice(0,count).join(" "); };
console.log(truncate('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 3));

// Exercise-11 --> Write a function to truncate a text if it is longer than the given characters range. (Truncated strings should end with 3 dots ("…") (by default) or with specified given characters.)

let truncateText = (sentence, length, ending) => {
    if (ending == null) {
        ending = "...";
    }
    if (sentence.length > length) {
        return sentence.substring(0,length) + ending;
    } else {
        return sentence;
    }
};
console.log(truncateText('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 20));
console.log(truncateText('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 21, " - $$$"));