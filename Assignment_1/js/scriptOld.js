/*
 * Joshua Pendlebury
 * Assignment 1 - COMP1073
 * 2025-06-02
 */

//GLOBAL VARIABLES AND CONSTANTS

// List cycling buttons locations
const noun1Btn = document.querySelector("#noun1Button");
const verbBtn = document.querySelector("#verbButton");
const adjBtn = document.querySelector("#adjectiveButton");
const noun2Btn = document.querySelector("#noun2Button");
const locationBtn = document.querySelector("#locationButton");

// Declaring story submit button location
const storyBtn = document.querySelector("#submitStory");
// Declaring story randomizer button location
const randStoryBtn = document.querySelector("#randomStory");
// Declaring story output location
const storyOut = document.querySelector("#storyOutput");

//Declaring the lists of values for each story segment alongside variables for list index and the selected text
//First noun
const noun1List = ["Mom", "Dad", "The dog", "A deer", "A spider", "My teacher"];
let noun1Index = 0;
let noun1Text = "";

//Verb
const verbList = ["jumped on", "sat on", "danced with", "stepped on", "saw", "ate"];
let verbIndex = 0;
let verbText = "";

//Adjective
const adjList = ["a smelly", "a soft", "a scary", "a funny", "a dirty", "a barking"];
let adjIndex = 0;
let adjText = "";

//Second noun
const noun2List = ["chair", "cat", "apple", "elephant", "cow", "sheep", ];
let noun2Index = 0;
let noun2Text = "";

//Location
const locationList = ["on the Moon", "in the forest", "in my soup", "at home", "at Walmart", "at school"];
let locationIndex = 0;
let locationText = "";

//EVENT LISTENERS
//Listening for list cycling buttons
noun1Btn.addEventListener("click", changeNoun1Values);
verbBtn.addEventListener("click", changeVerbValues);
adjBtn.addEventListener("click", changeAdjValues);
noun2Btn.addEventListener("click", changeNoun2Values);
locationBtn.addEventListener("click", changeLocationValues);

//Listening for story submit button
storyBtn.addEventListener("click", printStory);
//Listening for story randomizer button
randStoryBtn.addEventListener("click", randomStory);


// FUNCTIONS

function changeNoun1Values() {
    //Checking if the index variable is out of range and if so setting it to 0
    if(noun1Index >= noun1List.length || noun1Index < 0){
        noun1Index = 0;
    }

    noun1Text = noun1List[noun1Index];
    noun1Btn.textContent = noun1Text;
    //Printing value to console for debug checking
    //console.log(`noun1Text = ${noun1Text}`);
    //Incrementing the index for the next press
    noun1Index++;
}
//Copies of changeNoun1Values() renamed with appropriate variables for every other story chunk (I feel like there should be a way to do this with 1 function instead, might come back to this later.)
    //Comments were removed from the copies because they seem like a redundant waste of lines
function changeVerbValues() {
    if(verbIndex >= verbList.length || verbIndex < 0){
        verbIndex = 0;
    }

    verbText = verbList[verbIndex];
    verbBtn.textContent = verbText;
    //console.log(`verbText = ${verbText}`);
    verbIndex++;
}
function changeAdjValues() {
    if(adjIndex >= adjList.length || adjIndex < 0){
        adjIndex = 0;
    }

    adjText = adjList[adjIndex];
    adjBtn.textContent = adjText;
    //console.log(`adjText = ${adjText}`);
    adjIndex++;
}
function changeNoun2Values() {
    if(noun2Index >= noun2List.length || noun2Index < 0){
        noun2Index = 0;
    }

    noun2Text = noun2List[noun2Index];
    noun2Btn.textContent = noun2Text;
    //console.log(`noun2Text = ${noun2Text}`);
    noun2Index++;
}
function changeLocationValues() {
    if(locationIndex >= locationList.length || locationIndex < 0){
        locationIndex = 0;
    }

    locationText = locationList[locationIndex];
    locationBtn.textContent = locationText;
    //console.log(`location = ${locationText}`);
    locationIndex++;
}


//Constructs and prints selected story
function printStory() {
    //Using string literals to construct the story string out of the button selections
    let story = `${noun1Text} ${verbText} ${adjText} ${noun2Text} ${locationText}.`;
    //Prints constructed story string to the page
    storyOut.textContent = story;
}

//Constructs and prints randomized story
function randomStory() {
    //Using string literals to construct the story string out of random list items using randomSel function
    let story = `${randomSel(noun1List)} ${randomSel(verbList)} ${randomSel(adjList)} ${randomSel(noun2List)} ${randomSel(locationList)}.`
    //Prints constructed story string to the page
    storyOut.textContent = story;
}

// Function returns a random item from a list of any size
function randomSel(list) {
    return list[Math.floor(Math.random() * list.length)];
}