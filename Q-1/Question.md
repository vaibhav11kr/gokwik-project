Write a function called contains that searches for a value in a nested object. It returns
true if the object contains that value.

var nestedObject = {
data: {
info: {
stuff: {
thing: {
moreStuff: {
magicNumber: 44,
something: &#39;foo2&#39;
}
}
}
}
}
}
let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, &quot;foo&quot;); // false