var btn = document.querySelector(".btn-submit");

var inputText = document.querySelector("textarea[name='input']");
var outputText = document.querySelector(".output");

btn.addEventListener("click", clickEventHandle);

url = "https://api.funtranslations.com/translate/minion.json";

function clickEventHandle() {
    fetch(url+ "?" + "text=" +inputText.value)
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}

function errorHandler() {
    console.log("Error ocurred: ", error);
}
