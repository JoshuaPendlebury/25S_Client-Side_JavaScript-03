const output = document.querySelector('p');

/* STEP 1: String Length */
let step1A = "My string."
let step1B = step1A.length;
output.textContent = step1B;

/* STEP 2: Retrieving a Specific String Character */
step2A = step1A[5];
console.log(step2A);

/* STEP 3: Extracting Part of a String */
let step3A = step1A.indexOf("string");
let step3B = step1A.slice(step3A);
console.log(step3B);
// Note - if the substring is not found within the string, indexOf() returns -1

// Note - if you don't specify where to end the slice, the method returns the rest of the string

/* STEP 4: Changing Case */
let step4 = step1A.toUpperCase();
console.log(step4);

/* STEP 5: Updating Parts of a String */
let step5 = step1A.replace("string", "sandwich");
