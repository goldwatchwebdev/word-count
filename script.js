
                    // *mechanics of the script*
function atLeastTwoCharacters(text) {
    const letters = text.match(/[a-z]/gi || []);

    return letters.length >= 2;
}

function abscenceOfThreeConsecutiveCharacters(text) {
    for (const character of text) {
        const occurrences = Array.from(text);

        console.log(occurrences);
    }
}

                    // *foundations of manipulating the DOM*
const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

                    // *reading realtime Input*
textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    let wordCount = 0;

    textLoop:
    for (const text of splitted) {
        for (const check of checks) {
            if (!check(text)) {
                continue;
            }
        }

        wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
});










