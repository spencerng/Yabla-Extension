// ==UserScript==
// @name         Yabla Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Download transcripts and translations on Yabla
// @author       Spencer Ng
// @match        https://*.yabla.com/player*
// @grant        none
// ==/UserScript==

function main(){
    //Insert three buttons on video page
    var downloadButton = document.createElement("span");
<<<<<<< HEAD
    downloadButton.className = "fullscreen button"
    downloadButton.innerHTML = "Get Transcript"
=======
    downloadButton.className = "fullscreen button";
    downloadButton.innerHTML = "Get Transcript";
>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31

    document.getElementsByClassName("group")[0].appendChild(downloadButton);

    var autoCompleteButton = document.createElement("span");
<<<<<<< HEAD
    autoCompleteButton.className = "fullscreen button"
    autoCompleteButton.innerHTML = "Auto Complete"
=======
    autoCompleteButton.className = "fullscreen button";
    autoCompleteButton.innerHTML = "Auto Complete";
>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31

    document.getElementsByClassName("group")[0].appendChild(autoCompleteButton);

    var completeButton = document.createElement("span");
<<<<<<< HEAD
    completeButton.className = "fullscreen button"
    completeButton.innerHTML = "Complete"

    document.getElementsByClassName("group")[0].appendChild(completeButton);

    var mcCompleteButton = document.createElement("span");
    mcCompleteButton.className = "fullscreen button"
    mcCompleteButton.innerHTML = "Complete MC"

    document.getElementsByClassName("group")[0].appendChild(mcCompleteButton);

=======
    completeButton.className = "fullscreen button";
    completeButton.innerHTML = "Complete";

    document.getElementsByClassName("group")[0].appendChild(completeButton);

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31

    var complete = false; //Toggle fill in the blank auto completion

    completeButton.onclick = function(){
        complete = true;
        document.getElementsByClassName("game_type")[1].click();
        document.getElementsByClassName("blue button start_game")[0].click();
        putWord();
    };

<<<<<<< HEAD
    mcCompleteButton.onclick = function(){
        document.getElementsByClassName("game_type")[0].click();
        document.getElementsByClassName("blue button start_game")[0].click();
        var ansButton = document.createElement("span");
        ansButton.className = "slow button"
        ansButton.innerHTML = "Get Answer"

        document.getElementsByClassName("game_controls")[0].appendChild(ansButton);

        ansButton.onclick = function(){
            putWord();
        };
    };

=======
>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
    var nextButton = document.getElementsByClassName("next button blue")[0];

    nextButton.onclick=function(){
        if(complete)
            putWord();
    };

    downloadButton.onclick =function (){
        var videoTitle = document.getElementsByClassName("program")[0].textContent + " - " + document.getElementsByClassName("episode")[0].textContent +".txt";
        var subtitles = "";

        for(var i = 0; i < CAPTIONS.length; i++)
            subtitles+=CAPTIONS[i].transcript+" ";

        subtitles+="\n\n";

        for(var i = 0; i < CAPTIONS.length; i++)
            subtitles+=CAPTIONS[i].translation+" ";

        saveFile(subtitles, videoTitle);

    };

    function removePunctuation(word){
        var punctuation = [':','\"','\'','?','!','¡','¿',',','.',']','[','-','„','‚','»','«',';'];
        var repeat;
        do{
            repeat = false;
            var firstChar= word.charAt(0);

            for(var j = 0; j < punctuation.length; j++)
                if(firstChar==punctuation[j]){
                    word = word.substr(1);
                    repeat = true;
                }

<<<<<<< HEAD
            var lastChar = word.charAt(word.length-1)
            
=======
            var lastChar = word.charAt(word.length-1);

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
            for(var j = 0; j < punctuation.length; j++)
                if(lastChar==punctuation[j]){
                    word = word.substr(0, word.length-1);
                    repeat = true;
                }
        }while(repeat);

        return word;
    }

    //Auto completes word in fill in the blank
    function putWord(){
<<<<<<< HEAD
        
=======

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
        var subtitles = "";

        for(var i = 0; i < CAPTIONS.length; i++)
            subtitles+=CAPTIONS[i].transcript+" ";

        var scriptWords = subtitles.split(" ");

        for(var i = 0; i < scriptWords.length; i++)
            scriptWords[i] = removePunctuation(scriptWords[i]);
<<<<<<< HEAD
        

        var gameWords = document.getElementsByClassName("game_word");

        var gameWordsText = []
=======


        var gameWords = document.getElementsByClassName("game_word");

        var gameWordsText = [];
>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31

        for(var i = 0; i < gameWords.length; i++)
            gameWordsText.push(gameWords[i].textContent);

        var correctWord;

        //Check if blank is in first position
<<<<<<< HEAD
        if(document.getElementsByClassName("question")[0].firstChild.className=="underline")    {
            for(var i = 0; i < scriptWords.length; i++){
                if(scriptWords[i+1]===gameWordsText[0]&&scriptWords[i+2]===gameWordsText[1]
                    &&scriptWords[i+3]===gameWordsText[2]){
                    correctWord = scriptWords[i];
                    break;
                }
                
=======
        if(document.getElementsByClassName("question")[0].firstChild.className=="underline")	{
            for(var i = 0; i < scriptWords.length; i++){
                if(scriptWords[i+1]===gameWordsText[0]&&scriptWords[i+2]===gameWordsText[1]
                   &&scriptWords[i+3]===gameWordsText[2]){
                    correctWord = scriptWords[i];
                    break;
                }

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
            }

        }

        //Blank is not in first position
        else{ 
            var matchedWords = 0;
<<<<<<< HEAD
            
            for(var i = 0; i < scriptWords.length; i++){
                
=======

            for(var i = 0; i < scriptWords.length; i++){

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
                if(scriptWords[i]===gameWordsText[matchedWords])
                    matchedWords++;

                else if(matchedWords >= 1){
                    var isCorrect = true;

                    //After finding suspect blank, check if remaining game words (if any) are correct
                    for(var j = 0; j+matchedWords<gameWordsText.length; j++)
                        if(!(scriptWords[i+j+1]===gameWordsText[matchedWords+j]))
                            isCorrect = false;
<<<<<<< HEAD
                    
=======

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
                    if(isCorrect==true){
                        correctWord = scriptWords[i];
                        i=scriptWords.length; //Essentially a break statement
                    }
                }

                else if(!(scriptWords[i]===gameWordsText[matchedWords-1])) 
                    matchedWords = 0;
            }
        }

        var answerBox = document.getElementsByClassName("answer")[0];

        answerBox.value = correctWord;

<<<<<<< HEAD
        var buttons = document.getElementsByClassName("button")

        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].innerHTML===correctWord){
                buttons[i].click()
                break;
            }

        }

=======
>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
    }

    autoCompleteButton.onclick=function(){

        document.getElementsByClassName("game_type")[1].click();
        document.getElementsByClassName("blue button start_game")[0].click();
<<<<<<< HEAD
        
        for(var j = 0; j < 10; j++){ 
            
=======

        for(var j = 0; j < 10; j++){ 

>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
            putWord();

            var submitButton = document.getElementById("submit_answer");
            submitButton.click();
<<<<<<< HEAD
            
            var nextButton = document.getElementsByClassName("next button blue")[0];
            nextButton.click();
            
            
=======

            var nextButton = document.getElementsByClassName("next button blue")[0];
            nextButton.click();


>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
        }


    };

    function saveFile(data, fileName){
<<<<<<< HEAD
            var blob = new Blob([data], {type: 'text'}),
                e    = document.createEvent('MouseEvents'),
                a    = document.createElement('a')

            a.download = fileName
            a.href = window.URL.createObjectURL(blob)
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e)
=======
        var blob = new Blob([data], {type: 'text'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a');

        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
>>>>>>> 1d69f844d9cc9893c4a4022911110e28b6e6da31
    };

    //Not used in current implementation for auto complete
    function sleep(milliSeconds){
        var startTime = new Date().getTime(); 
        while (new Date().getTime() < startTime + milliSeconds); 
    }
}

function injectScript(funct) {
    var s = document.createElement('script');
    s.appendChild(document.createTextNode('('+funct+')();'));
    (document.body || document.head || document.documentElement).appendChild(s);
}

(function() {
    'use strict';
    injectScript(main);

})();