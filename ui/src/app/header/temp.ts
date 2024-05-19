// Define the Holder type
type Holder = { name: string };

// Function to copy an array of type Holder
function copyArray(array: Holder[]): Holder[] {
    // Shallow copy the array using the spread operator
    const copiedArray: Holder[] = [...array];
    return copiedArray;
}

// Test the function
const originalArray: Holder[] = [{ name: "John" }, { name: "Alice" }, { name: "Bob" }];

// Copy the original array
const copiedArray = copyArray(originalArray);

// Log the original and copied arrays
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

// Access the length property of the copied array
console.log("Length of Copied Array:", copiedArray.length);


