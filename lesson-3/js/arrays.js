//const output = document.querySelector('body p:nth-of-type(2)');
const output = document.querySelector('body ul');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = ["String", true, 100, [5, "hello"]];

/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = `The second element of myArray is ${myArray[1]}.`;
// You can also change a particular element
myArray[1] = false;
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
myArray[3][1] = "goodbye";

/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
totalArrayElements = myArray.length + myArray[3].length;
output.textContent =`There are ${totalArrayElements} elements in myArray.`;
// In particular, looping through arrays
output.textContent = ""
for (let i = 0; i < myArray.length; i++) {
    
    //Check if element is an array
    if(Array.isArray(myArray[i])){
        //We need a nested ul
        let childList = document.createElement("ul");
        output.append(childList);

        //Loop through sub array
        for (let j = 0; j < myArray[i].length; j++) {
            let childItem = document.createElement("li");
            childList.append(childItem);
            childItem.textContent = `${myArray[i][j]}`;
            
        }
    }
    else{
        let listItem = document.createElement("li");
        output.append(listItem);
        listItem.textContent = `${myArray[i]}`;
        
    }
}

/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let myString = "Toronto Maple Leafs, Chicago Black Hawks, Detroit Red Wings, Boston Bruins, Montreal Canadians, New York Rangers";

let stringArray = myString.split(", ");
console.log(stringArray)
// Output one of the array items
console.log(stringArray[0]);
// Output the last element of the array
console.log(stringArray[stringArray.length - 1])

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let reconstructedString = stringArray.toString();
console.log(reconstructedString);

let joinString = stringArray.join(" | ");
console.log(joinString);

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
stringArray.push("Buffalo Sabres");
console.log(stringArray);
// If you would like to capture how many elements are in the array after you have edited it, then…
let stringArrayLength = stringArray.push("Philadelphia Fliers");
console.log(stringArrayLength);
// Removing an item from an array with pop()
//stringArray.pop();
// pop() returns the item that was removed, rather than the length of the updated array, so…
let removedElement = stringArray.pop();
console.log(removedElement)
// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
console.log(stringArray);
let shiftedElement = stringArray.shift();
console.log(stringArray);
stringArrayLength = stringArray.unshift("Winnipeg Jets");
console.log(stringArray);
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
stringArray.splice(2, 0, "Edmonton Oilers");
console.log(stringArray);
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */