// deepCompare(a, b)

// jesu li oba primitivni tipovi?
//     -> uporedi ===

// jesu li oba objekti?
//     -> imaju li isti broj ključeva?

//     za svaki ključ
//         ako je vrijednost objekat
//             deepCompare(...)
//         inače
//             ===

// ako je sve prošlo
//     true

function shallowComparison(element1: object, element2: object) {
  const keys1 = Object.keys(element1);
  const keys2 = Object.keys(element2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => element1[key] === element2[key]);
}

function deepComparison(obj1, obj2) {
  // ako nisu objekti
  if (obj1 !== Object(obj1) || obj2 !== Object(obj2)) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every((key) => {
    return deepComparison(obj1[key], obj2[key]);
  });
}

const obj1 = {
  user: {
    profile: {
      age: 25,
    },
  },
};

const obj2 = {
  user: {
    profile: {
      age: 25,
    },
  },
};

deepComparison(obj1, obj2);
