
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL  = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}
function errorHandler(error){
   console.log("error occured",error) ;
   alert("Something wrong with error. Try again after sometime");
}

function clickHandler(){
   console.log("Clicked");
   var inputText = txtInput.value;
   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;

   })
   .catch(errorHandler) //for error handling
};

btnTranslate.addEventListener("click", clickHandler)


