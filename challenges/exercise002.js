export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (typeof sandwich !== "object") throw new Error("sandwich object is required");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (typeof person !== "object") throw new Error("sandwich is required");

  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  if (Array.isArray(arr) === false) throw new Error("an array is required");

  /*let total = 0;
  arr.forEach(animal => {
    if (animal.toLowerCase() === "sheep") total++;
  });

  return total;*/

  return arr.filter(animal => animal.toLowerCase() === "sheep").reduce(total => { return ++total }, 0);
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (typeof person !== "object") throw new Error("person is required");

  return person.address?.postCode?.startsWith?.("M") && person.address.city === "Manchester";
}
