const output = document.querySelector('body p:nth-of-type(2)');
		
/* STEP 1a: A simple if/else statement */
let homeWorkDone = null;
let breakDuration = 0;

if(homeWorkDone === true){
	breakDuration = 60;
}
else{
	breakDuration = 10;
}

output.textContent = `Break is ${breakDuration} minutes long.`
// STEP 1b: Any value that is not false, undefined, null, 0, NaN, or an empty string will evaluate to TRUE when tested using a conditional statement - try a few other values for var homeWorkDone and test

/* STEP 2: The more complex if|elseif|else */
const page = document.querySelector('html');
const select = document.querySelector('select');
const icon = document.querySelector('#weatherIcon');
const temp = document.querySelector('#temp');
const weatherButton = document.querySelector('#weatherButton');
const comments = document.querySelector('#commentary');

/* STEP 2a: Add an event listener for the 'click' event on the 'Set Weather' button that invokes the setWeather() function below */
weatherButton.addEventListener("click", setWeather);

function setWeather() {
	let choice = select.value;
	let temperature = temp.value;

	console.log(`The weather is ${choice}, and the temperature is ${temperature}.`)
	/* STEP 2b: Craft an IF/ELSEIF/ELSE that changes the src attribute of the icon element to the appropriate .svg file in the images folder */
	if(choice === "sunny"){
		icon.setAttribute("src", "./images/sunny.svg");
	}
	else if(choice === "rainy"){
		icon.src = "./images/rainy.svg";
	}
	else if(choice === "windy"){
		icon.setAttribute("src", "./images/windy.svg");
	}
	else{
		icon.setAttribute("src", "./images/cloud-off.svg");
	}
	setBackgroundColour();
	/* STEP 3: Add a nested IF/ELSE statement inside the 'sunny' condition above that tests for temperature, and if it is equal to or greater than 15, turn the page background orange, otherwise turn it lightblue */
	function setBackgroundColour(){
		if(temperature >= 15){
			page.style.backgroundColor = "orange";
		}
		else{
			page.style.backgroundColor = "lightblue";
		}
	}


	/* STEP 4: Logical operators - and, or, not (delete multi-line comment delimiters below) */
	// STEP 4a: AND - && (It's sunny AND it's at least 15deg)
	if (choice === "sunny" && temperature >= 15) {
		comments.textContent = 'It is sunny and warm — time to find your sunglasses!';
	// STEP 4b: AND, once again - && (It's sunny AND it's less than 15deg)
	} else if (choice === "sunny" && temperature < 15) {
		comments.textContent = 'It is sunny out there, but it is a bit cool.';
	// STEP 4c: OR - || (It's windy OR rainy)
	} else if (choice === "windy" || choice === "rainy") {
		comments.textContent = 'The weather today is a bit unsettled.';
	} else {
		comments.textContent = 'You did not specify the type of weather, today.';
	}
	// STEP 4d: NOT - ! (It's NOT rainy)
	if (choice !== "rainy") {
		comments.textContent += ' No sign of rain.';
	}
	// Weather icons by Cole Bemis - https://feathericons.com/, MIT, https://commons.wikimedia.org/w/index.php?curid=60153354

} // End of setWeather() function

/* STEP 5: Switch statements
Sometimes listing a series of conditions and the code that might be executed in each case is the friendliest way to structure your conditional */

const windSpeed = document.querySelector('#windSpeed');
const windComment = document.querySelector('#windComment');

windSpeed.addEventListener('change', getWindSpeed);

function getWindSpeed() {
let speed = Number(windSpeed.value);
// STEP 5a: Build the SWITCH code block
	switch (speed){
	// STEP 5b: Build out four cases, followed by a default
		
		// 100 km/h
		case 100:
			windComment.textContent = speed + 'km/h - Holy schmoly! Hold on to your hat!';
			break;
		// 75 km/h
		case 75:
			windComment.textContent = speed + 'km/h - It\'s a-howling out there!';
			break;
		// 50 km/h
		case 50:
			windComment.textContent = speed + 'km/h - Quite gusty out there, today.';
			break;
		// 25 km/h
		case 25:
			windComment.textContent = speed + 'km/h - A wee bit breezy.';
			break;
		// 0 km/h
		case 0:
			windComment.textContent = speed + 'km/h - Calm as it gets.';
			break;
		default:
			windComment.textContent = 'No wind speed available.';
	}
} // End of getWindSpeed() function


/* STEP 6: Ternary operator
This piece of syntax is a bit less typing, but it is harder to read */
let breakMessage = document.querySelector('#breakTime');
let coffeeBreak = true;


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
