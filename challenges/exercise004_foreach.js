
// this one uses foreach loops

export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  // find nums < 1
  let index = 0;
  const arr = new Array(nums.length);
  nums.forEach(num => {
    if (num < 1) {
      arr[index++] = num;
    }
  });

  arr.length = index;   // truncate returned array to remove empty elements
  return arr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const arr = new Array(names.length);
  let index = 0;
  names.forEach(name => {
    if (name.startsWith(char)) {
      arr[index++] = name;
    }
  });

  arr.length = index;
  return arr;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  // calling previous function
  return findNamesBeginningWith(words, "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const arr = new Array(nums.length);
  let index = 0;
  nums.forEach(num => {
    if (num % 1 === 0) {
      arr[index++] = num;
    }
  });

  arr.length = index;
  return arr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const arr = new Array(users.length);
  let index = 0;
  users.forEach(user => {
    arr[index++] = user.data.city.displayName;
  });

  arr.length = index;
  return arr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const roots = new Array(nums.length);
  let index = 0;
  nums.forEach(num => {
    roots[index++] = Number(Math.sqrt(num).toFixed(2));
  });

  console.log(roots);
  return roots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  // doing case-insensitive comparison
  str = str.toLowerCase();

  const arr = new Array(sentences.length);
  let index = 0;
  sentences.forEach(sentence => {
    if (sentence.toLowerCase().indexOf(str) != -1) {
      arr[index++] = sentence;
    }
  });

  arr.length = index;
  return arr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const arr = new Array(triangles.length);
  let index = 0;
  triangles.forEach(triangle => {
    arr[index++] = Math.max(...triangle);
  });

  arr.length = index;
  return arr;
}
