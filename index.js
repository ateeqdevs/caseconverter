// convert text to uppercase.

document.getElementById("upper-case")
    .addEventListener("click", function () {
        let text = document.querySelector("textarea").value;
        document.querySelector("textarea").value = text.toUpperCase();
    });

// convert text to lowercase.

document.getElementById("lower-case")
    .addEventListener("click", function () {
        let text = document.querySelector("textarea").value;
        document.querySelector("textarea").value = text.toLowerCase();
    });


document.getElementById("proper-case")
    .addEventListener("click", function () {
        let text = document.querySelector("textarea").value;
        let result = properCase(text);
        document.querySelector("textarea").value = result;
    });


document.getElementById("sentence-case")
    .addEventListener("click", function () {
        let text = document.querySelector("textarea").value;
        let result = sentenceCase(text);
        document.querySelector("textarea").value = result;

    })

function properCase(text) {
    let words = text
        .toLowerCase()
        .split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}


function sentenceCase(text) {
    let textArray = text.toLowerCase().split(".");
    for (let i = 0; i < textArray.length - 1; i++) {
        let result = textArray[i].match(/[a-z/A-Z]/i);
        textArray[i] = textArray[i].replace(textArray[i][result["index"]], textArray[i][result["index"]].toUpperCase());
    }
    return textArray.join(".")
}


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let filename = "text.txt"
    download(filename, text);
}, false);