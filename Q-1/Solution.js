// The Main function to recursively check the value inside  the object and we are iterating the object using for in method since is not iterable through normal array iterating methods

function contains(obj, val) {
  if (obj == null) {
    return false;
  }
  for (let key in obj) {
    if (
      obj[key] == val ||
      (typeof obj[key] == "object" && contains(obj[key], val))
    ) {
      return true;
    }
  }
  return false;
}

var nestedObject1 = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

var nestedObject2 = {
  data: {
    info: {
      stuff: {
        thing: {
          more: {
            moreStuff: {
              magic: {
                magicNumber: 44,
              },
              something: "foo2",
            },
          },
        },
      },
    },
  },
};

let hasIt1 = contains(nestedObject1, 44);
let doesntHaveIt1 = contains(nestedObject1, "foo");

let hasIt2 = contains(nestedObject2, 4);
let doesntHaveIt2 = contains(nestedObject2, "foo2");

console.log(hasIt1);
console.log(doesntHaveIt1);

console.log(hasIt2);
console.log(doesntHaveIt2);
