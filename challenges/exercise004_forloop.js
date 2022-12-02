
// this one uses for loops

export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  // find nums < 1
  const arr = new Array(nums.length);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      arr[index++] = nums[i];
    }
  }

  arr.length = index;   // truncate returned array to remove empty elements
  return arr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const arr = new Array(names.length);
  let index = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      arr[index++] = names[i];
    }
  }

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
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 1 === 0) {
      arr[index++] = nums[i];
    }
  }

  arr.length = index;
  return arr;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  const arr = new Array(users.length);
  let index = 0;
  for (let i = 0; i < users.length; i++) {
    arr[index++] = users[i].data.city.displayName;
  }

  arr.length = index;
  return arr;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const roots = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    roots[i] = Number(Math.sqrt(nums[i]).toFixed(2));
  }
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
  for (let i = 0; i < sentences.length; i++) {
    console.log(sentences[i].toLowerCase() + " <<>> " + str);
    if (sentences[i].toLowerCase().indexOf(str) != -1) {
      arr[index++] = sentences[i];
    }
  }

  arr.length = index;
  return arr;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const arr = new Array(triangles.length);
  let index = 0;
  for (let i = 0; i < triangles.length; i++) {
    arr[index++] = Math.max(...triangles[i]);
  }

  arr.length = index;
  return arr;
}
