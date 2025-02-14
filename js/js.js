
//Declared our variables
let FirstNoun = ["The Turkey", "Mom","Dad","The Dog", "My Teacher", "The Elephant", "The Cat"];
let Verb = ["sat on", "ate", "danced with", "saw", "doesn't like","kissed"];
let Adjective = ["a funny", "a scary","a goofy","a slimy","a barking","a fat"];
let SecondNoun = ["goat", "monkey","fish","frog","bug","worm"];
let Location = ["on the moon", "on the chair","in my spaghetti","in my soup","on the grass","inmy shoes"];
let result =[];
let num = 0; let num2 = 0; let num3 = 0; let num4 = 0; let num5 = 0;

//Store user-selected words
let selectedWords = {
    firstNoun: '',
    verb: '',
    adjective: '',
    secondNoun: '',
    location: ''
};

//function to select noun from the array each time the function is called
function generateFirstNoun(){
    var fNoun = FirstNoun[num];
    selectedWords.firstNoun = fNoun;
    num++;//to iterate through the array
    if(num >= FirstNoun.length){
        num = 0;
    }
    document.getElementById('Story').innerText = fNoun;//to display the noun after the function is called
}

//function to select verb from the array each time the function is called
function generateVerb(){
    var verb = Verb[num2];
    selectedWords.verb = verb;
    num2++;//to iterate through the array
    if(num2 >= Verb.length){
        num2 = 0;
    }
    document.getElementById('Story').innerText = verb;//to display the Verb after the function is called
}

//function to select adjective from the array each time the function is called
function generateAdjective(){
    var adj = Adjective[num3];
    selectedWords.adjective = adj;
    num3++;//to iterate through the array
    if(num3 >= Adjective.length){
        num3 = 0;
    }
    document.getElementById('Story').innerText = adj;//to display the adjective after the function is called
}

// Function to select second noun from the array each time the function is called
function generateSecondNoun() {
    var sNoun = SecondNoun[num4];
    selectedWords.secondNoun = sNoun;
    num4++;
    if (num4 >= SecondNoun.length) {
        num4 = 0;
    }
    document.getElementById('Story').innerText = sNoun;
}

//function to select location from the array each time the function is called

function generateLocation() {
    var loc = Location[num5];
    selectedWords.location = loc;
    num5++;
    if (num5 >= Location.length) {
        num5 = 0;
    }
    document.getElementById('Story').innerText = loc;
}

// Function to generate a whole story using the selected words
function generateStory() {
    var story = `${selectedWords.firstNoun} ${selectedWords.verb} ${selectedWords.adjective} ${selectedWords.secondNoun} ${selectedWords.location}.`;

    // Display the story
    document.getElementById('Story').innerText = story;
}

//add event listener to each button
document.getElementById("FirstNounButton").addEventListener('click', generateFirstNoun);
document.getElementById("VerbButton").addEventListener('click', generateVerb);
document.getElementById("AdjectiveButton").addEventListener('click', generateAdjective);
document.getElementById("SecondNounButton").addEventListener('click', generateSecondNoun);
document.getElementById("LocationButton").addEventListener('click', generateLocation);
document.getElementById("StoryButton").addEventListener('click', generateStory);