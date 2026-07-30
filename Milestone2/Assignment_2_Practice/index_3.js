// A-02  —  Word Position Filter         🟡 Medium

// Concepts Used:  Strings · Loops · Modulus

// Scenario:  SnapText, a note-taking app, builds a quick preview of a caption by keeping only the words at even index positions (0, 2, 4...). Write a function filterEvenPositionWords(sentence) that returns the filtered sentence.
// Expected Output:
//    filterEvenPositionWords('The quick brown fox jumps')
//      → 'The brown jumps'

// Hints:
//   1.  split(' ') into an array of words
//   2.  Loop through the words and keep the ones where the index passes i % 2 === 0

function filterEvenPositionWords(sentence){

    let sp = sentence.split(' ')
    let box = []

    // console.log(sp);
    
    for(let i = 0; i < sp.length; i++ ){
        // console.log(i, sp[i]);
        if(i % 2 === 0){                       
            box.push(sp[i])
        }
    }
    let convertString = box.join(' ')
    return convertString

}

console.log(filterEvenPositionWords('The quick brown fox jumps'));
