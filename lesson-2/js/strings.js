const output = document.querySelector('p');

/* STEP 1: Creating Strings */
let step1 = "A string";
output.textContent = step1;

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */
let step2 = "And he said \"Lol\".";

/* STEP 3: Concatenation */
let step3A = "JavaScript";
let step3B = "Rocks!";
console.log(step3A + " " + step3B);

/* STEP 4: Numbers and Strings */
let step4A = "Fahrenheit" + 451;
console.log(step4A);

// numbers can be converted to strings
let step4B = 2025;
let step4C = String(step4B);
// strings can be converted to numbers, too
let step4D = Number(step4C);
// and back again, if we want
let step4E = String(Number(String(step4D)));