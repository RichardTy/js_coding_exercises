
// this one uses foreach loops along with map and filter etc

export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  // this one uses function() {}
  // the remainder use arrow syntax =>
  return nums.filter(function (num) {
    return num < 1
  });
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name.startsWith(char));
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  // calling previous function
  return findNamesBeginningWith(words, "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(num => num % 1 === 0);
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map(user => user.data.city.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(num => Number(Math.sqrt(num).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  // doing case-insensitive comparison
  str = str.toLowerCase();

  return sentences.filter(sentence => sentence.toLowerCase().indexOf(str) != -1);
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  return triangles.map(triangle => Math.max(...triangle));
}
