// explore.js

window.addEventListener('DOMContentLoaded', init);


// HELPER FUNCTION
function fillVoices() {

  const voiceOptions = speechSynthesis.getVoices();

  for (let i = 0; i < voiceOptions.length; i++) {

    const option = document.createElement('option');
    option.textContent = `${voiceOptions[i].name} (${voiceOptions[i].lang})`;

    option.setAttribute('data-lang', voiceOptions[i].lang);
    option.setAttribute('data-name', voiceOptions[i].name);

    document.getElementById("voice-select").appendChild(option);
  }
}

const smiley = document.querySelector("img");
const playButton = document.querySelector("button"); 
var getText = document.getElementById("test-to-speak");

function init() {
  fillVoices();

  // TODO 
  if (true) {
    smiley.src = 'assets/images/smiling-open.png' 
  }


  playButton.addEventListener('click' , (event) => {
    var toSpeak = new SpeechSynthesisUtterance(getText.value);

    speechSynthesis.speak(utter);
  });
}



