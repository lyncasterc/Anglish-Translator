function singulariseThenPluralise(word) {
    if (word.endsWith('ies')) {
        word = word.substring(0, word.length - 3) + 'y';
    } else if (word.endsWith('s')) {
        word = word.substring(0, word.length - 1);
    } else if (word.endsWith('es')) {
        word = word.substring(0, word.length - 2);
    } else {
        word = "";
    }

    if (word != "") {
        if (word in wordbook) {
            word = pluralise(wordbook[word]);
        } else {
            word = "";
        }
    }

    return word;
}

function pluralise(word) {
    if (word.endsWith('y')) {
        word = word.substring(0, word.length - 1) + 'ies';
    } else if (!word.endsWith('s')) {
        word = word + 's';
    } else {
        word = "";
    }

    return word;
}


function presentContinuous(word) {
    if (word.endsWith('ing')) {
        word = word.substring(0, word.length - 3);
    } 

    if (word != "") {
        if (word in wordbook) {
            word = wordbook[word] + "ing";
        } else {
           word = word + "e"
           word = wordbook[word] + "ing";
        }
    }

    return word;
}


function toPastTense(word) {
    if (!word.endsWith('ed')) {
        if (word.endsWith('y')) {
            word[word.length - 1] = 'i';
        }
        if(word.endsWith('e')) {
            word+='d'
        } else {
            word+="ed"

        }

    } else {
        word = "";
    }
    return word;
}

function toPresentTenseThenPastTense(word) {
    originalWord = word;

    if (word.endsWith('ed')) {
        word = word.substring(0, word.length - 2);
        if (word in wordbook == false) {
            if (originalWord.endsWith('d')) {
                word = originalWord.substring(0, originalWord.length - 1);
            } else {
                word = "";
            }
        }
    } else {
        word = "";
    }

    if (word != "") {

        if (word in wordbook) {
            word = toPastTense(wordbook[word]);

        } else {
            word = "";
        }
    }

    return word;
}