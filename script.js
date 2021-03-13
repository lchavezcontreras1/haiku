// Global
//the index of the outer array indicates the number of syllable sin the word in the inner array
//example: Les-li Let-ter stored in
let wordList = [
    /*0 1*/["in", "at", "the", "a"],
    /*1 2*/["over", "special", "perfect"],
    /*2 3*/["adequate", "attractive", "average"],
    /*3 4*/["eternity", "alien", "beautiful"],
    /*4 5*/["momentarily", "teleportation", "obligatory"],
    /*5 6*/["responsibility", "electrifying", "identification"],
    /*6 7*/["industrialization", "artificiality", "indestructibility"],
]
let syllableArray = [];
let row = "";

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
    let occurrences = word.split("-").length - 1;
    let numToIndex = wordList[occurrences];
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
        $("div#message").text("Sorry! That word has too many syllables for a haiku :(")
    }
    console.log(wordList)
//hint:use index array
}

//pickRandomWord(syllable)
//will locate the array with words that have a given number of syllables
function generateRandomWord(syllable) {
    let ranOuter = Math.floor(Math.random() * 7);
    syllableArray.push(ranOuter);
    let ranIndex = wordList[ranOuter];
    let innerLength = ranIndex.length;
    let ranInner = Math.floor(Math.random() * innerLength);
    row += ranIndex[ranInner].toString();
    console.log(ranOuter, ranInner);
    console.log(row);

}
function generateHaiku(e) {
    e.preventDefault();
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //I want you to  give me a list of of five random words.
    for (let i = 0; i < 5; i++) {
        row += " " , generateRandomWord() + " ";
    }
    syllableArray.reduce(reducer);
    let totalSyllable = syllableArray.reduce(reducer, syllableArray.length);

    console.log(totalSyllable);
    console.log(syllableArray);
    console.log(row);

    // If the sum of the words is greater than five I want you to keep keep giving me words util syllables is equal to five
    if (totalSyllable > 5) {
       row = "";
       console.log(row);
        for (let i = 0; i < 5; i++) {
            row += " " , generateRandomWord() +" ";
        }
        console.log(row);
    }else if (totalSyllable===5){
        let rowOne = $("#row-one").text(`${row}`);
        console.log(rowOne);
        syllableArray = [];
    }
//I got lost after this and it doesn't even work, how do you build a row >_<
//display haiku

}

