// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase()
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let totalPrice = originalPrice + ((originalPrice / 100) * vatRate);
  // round to 2 decimal places, unless totalPrice is an integer
  if (Number.isInteger(totalPrice)) {
    return totalPrice;
  } else {
    return Number(totalPrice.toFixed(2));
  }
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let totalPrice = originalPrice - ((originalPrice / 100) * reduction);
  // round to 2 decimal places, unless totalPrice is an integer
  if (Number.isInteger(totalPrice)) {
    return totalPrice;
  } else {
    return Number(totalPrice.toFixed(2));
  }
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  // return middle 2 chars if length is even or middle char if length is odd
  if (str.length % 2 === 0) {
    let first = (str.length / 2) - 1;
    return str.substring(first, first + 2);
  } else {
    return str.charAt(str.length / 2);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  let revWord = "";
  let i = word.length;
  while (i--) {
    revWord += word[i];
  } 

  return revWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (Array.isArray(words) === false) throw new Error("an array is required");

  const revWords = new Array(words.length);
  let i = words.length;
  while (i--) {
    revWords[i] = reverseWord(words[i]);
  }

  return revWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  if (Array.isArray(users) === false) throw new Error("an array is required");

  /*let count = 0;
  users.forEach(user => {
    if (user.type.toLowerCase() === "linux") {
      count++;
    }
  });

  return count;*/

  return users.filter(user => user.type.toLowerCase() === "linux").reduce((total) => { return ++total; } , 0);
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  if (Array.isArray(scores) === false) throw new Error("an array is required");

  let total = 0;
  scores.forEach(score => total += score);
  total /= scores.length;

  if (Number.isInteger(total)) {
    return total;
  } else {
    return Number(total.toFixed(2));
  }
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (Number.isFinite(n) === false) throw new Error("a number is required");

  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }
  else if (n % 3 === 0) {
    return "fizz";
  }
  else if (n % 5 === 0) {
    return "buzz";
  }
  else {
    return n;
  }
}
