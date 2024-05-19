var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to copy an array of type Holder
function copyArray(array) {
    // Shallow copy the array using the spread operator
    var copiedArray = __spreadArray([], array, true);
    return copiedArray;
}
// Test the function
var originalArray = [{ name: "John" }, { name: "Alice" }, { name: "Bob" }];
// Copy the original array
var copiedArray = copyArray(originalArray);
// Log the original and copied arrays
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);
// Access the length property of the copied array
console.log("Length of Copied Array:", copiedArray.length);
