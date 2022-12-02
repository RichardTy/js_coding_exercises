import { capitalize } from "./exercise001.js";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (Array.isArray(nums) === false) throw new Error("an array is required");

  /*const squares = new Array(nums.length);
  let i = 0;
  nums.forEach(num => {
    squares[i++] = num * num;
  });

  return squares;*/

  return nums.map(num => num * num);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (Array.isArray(words) === false) throw new Error("an array is required");

  // capitalize all but the first word, using function from exercise 1
  /*let camel = "";
  words.forEach(word => {
    if (camel.length === 0) {
      camel += word;
    } else {
      camel += capitalize(word);
    }
  });

  return camel;*/

  return words.map((word, i) => i > 0 ? capitalize(word) : word).join('');
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (Array.isArray(people) === false) throw new Error("an array is required");

  /*let total = 0;
  people.forEach(person => total += person.subjects.length);

  return total;*/

  return people.reduce((total, person) => { return total += person.subjects.length; }, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (Array.isArray(menu) === false) throw new Error("an array is required");

  /*let found = false;

  menu.forEach(dish => {
    dish.ingredients.forEach(item => {
      if (item === ingredient) {
        found = true;
        return;
      }
    })
    if (found) {
      return;
    }
  });

  return found;*/

  // menu is array of menu objects so map each one to it's list of ingredients
  // this gives an array of arrays, so flatten each array to check each individual ingredient inside
  return menu.map(dish => { return dish.ingredients; }).flat().some(item => item === ingredient);
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  if (Array.isArray(arr1) === false) throw new Error("an array is required for arr1");
  if (Array.isArray(arr2) === false) throw new Error("an array is required for arr2");

  // using a Set to store one instance of each number found in both arrays
  const set = new Set();

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      if (num1 === num2) {
        set.add(num1);
      }
    })
  });

  return Array.from(set).sort();

  //return [... new Set(arr1)].filter(num => arr2.indexOf(num) != -1);
}
