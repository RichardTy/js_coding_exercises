export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.findIndex(num => num === n);
  if (index != -1 && index < nums.length - 1) {
    return nums[index + 1];
  } else {
    return null;
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const counts = { "0": 0, "1": 0 };

  for (const c of str) {
    if (c === '0') {
      counts["0"]++;
    } else if (c === '1') {
      counts["1"]++;
    }
  }

  return counts;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  // convert number to string and iterate over chars in reverse
  // ignoring any trailed zeros in the original number (now leading zeros)
  let str = "" + n;
  let i = str.length;
  let reversedNum = "";
  while (i--) {
    if (str[i] != 0 || reversedNum.length > 0) {
      reversedNum += str[i];
    }
  }

  return Number(reversedNum);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  // using reduce to sum each sub array, then again to sum those sums
  return arrs.reduce((total, subArr) => {
    return total + subArr.reduce((subTotal, num) => {
      return subTotal + num;
    });
  }, 0);    // 0 = total start value
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (Array.isArray(arr) === false) throw new Error("an array is required");

  // swap first and last array elements
  /*if(arr.length < 2) {
    return arr;
  } else {
    let last = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = last;
    return arr;
  }*/

  // a bit more concise but it is creating 2 extra arrays
  if (arr.length < 2) {
    return arr;
  } else {
    return Array(arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]);
  }
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  // case-insensitive search of a an objects string fields
  searchTerm = searchTerm.toLowerCase();
  const keys = Object.keys(haystack);

  for (let i = 0; i < keys.length; i++) {
    if (typeof haystack[keys[i]] === "string" && haystack[keys[i]].toLowerCase().indexOf(searchTerm) != -1) {
      return true;
    }
  }

  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  
  // remove non-alpha chars and do case-insensitive word count
  str = str.replace(/[^a-zA-Z ]/g, "").toLowerCase();

  const totals = {};
  const words = str.split(" ");
  words.forEach(word => {
    if(Object.hasOwn(totals, word) === false) {
      totals[word] = 0;
    }
    totals[word]++;
  });

  return totals;
};
