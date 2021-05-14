// Global
//the index of the outer array indicates the number of syllable in the word in the inner array
//example: Les-li Let-ter stored in index 1 syllable 2
let wordList = [
    /*0 1*/["in", "at", "the", "a"],
    /*1 2*/["over", "special", "perfect"],
    /*2 3*/["adequate", "attractive", "average"],
    /*3 4*/["eternity", "alien", "beautiful"],
    /*4 5*/["momentarily", "teleportation", "obligatory"],
    /*5 6*/["responsibility", "electrifying", "identification"],
    /*6 7*/["industrialization", "artificiality", "indestructibility"],
]

//watch out for syllable array
let syllableArray = [];
let row = [];

// document.ready
$(document).ready(function () {
    $("button#add-word").click(addWord);
    $("button#generate").click(generateHaiku);
});

//addWord
function addWord(e) {
//get the word entered by the user
    e.preventDefault();
    let word = $("input#word").val();
//count the number of dashes and determine how many syllables
    //will get the index number by counting the dashes
    let occurrences = word.split("-").length - 1;
    //will get the array based on the index
    let numToIndex = wordList[occurrences];
    //will remove the dashes
    let newWord = word.replace(/-/gi, "");
//if the word has more than 7 syllables display an error message
    if (occurrences === 0) {
        numToIndex.push(newWord);
    } else if (occurrences === 1) {
        numToIndex.push(newWord);
    } else if (occurrences === 2) {
        numToIndex.push(newWord);
    } else if (occurrences === 3) {
        numToIndex.push(newWord);
    } else if (occurrences === 4) {
        numToIndex.push(newWord);
    } else if (occurrences === 5) {
        numToIndex.push(newWord);
    } else if (occurrences === 6) {
        numToIndex.push(newWord);
    } else {
        $("div#message").text("Sorry! That word has too many syllables for a haiku :(");
    }
    console.log(wordList);
}

//generateRandomWord
function generateRandomWord() {
    //will create a random number for index 0-6
    let ranOuter = Math.floor(Math.random() * 7);
    //will generate a random number for the array picked
    let ranInner = Math.floor(Math.random() * wordList[ranOuter].length);
    //random number pushed to syllable Array, keeps count of syllables
    syllableArray.push(ranOuter+1);
    //returns random word
    let randomWord = wordList[ranOuter][ranInner];
    row.push(randomWord);
    //console.log(row);
    //console.log(syllableArray);
}

//creates sum of syllableArray
function addSyllables(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return syllableArray.reduce(reducer);
}

//creates rows
function rowSyllableFive(){
    generateRandomWord();
    let sum = addSyllables();
    do{
        generateRandomWord();
        sum = addSyllables();
        //console.log(addSyllables() + " sum for 5");
    } while (sum<5);
}
function rowSyllableSeven(){
    generateRandomWord();
    let sum = addSyllables();
    do{
        generateRandomWord();
        sum = addSyllables();
        //console.log(addSyllables() + " sum for 7");
    }while (sum<7);
}

//clear syllableArray & row
function clearArray(){
    row = [];
    syllableArray = [];
}

//display haiku
function generateHaiku(e) {
    e.preventDefault();
    //displays first row
    rowSyllableFive();
    let sum = addSyllables();
    do{
        clearArray();
        rowSyllableFive();
        sum = addSyllables();
    }while(sum>5);
    if(sum===5){
        $("p#row-one").text(row.join(" "));
        console.log(addSyllables() + " for first row");
        //console.log(row);
        clearArray();
    }
    //displays second row
    rowSyllableSeven();
    do{
        clearArray();
        rowSyllableSeven();
        sum = addSyllables();
    }while(sum>7);
    if(sum===7){
        $("p#row-two").text(row.join(" "));
        console.log(addSyllables() + " for second row");
        //console.log(row);
        clearArray();
    }
    //displays third row
    rowSyllableFive();
    do{
        clearArray();
        rowSyllableFive();
        sum = addSyllables();
    }while(sum>5)
    if(sum===5){
        $("p#row-three").text(row.join(" "));
        console.log(addSyllables() + " for third row");
        //console.log(row);
        clearArray();
    }
}

