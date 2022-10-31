// expose.js
window.addEventListener('DOMContentLoaded', init);

const hornDropdown = document.getElementById("horn-select");
const volumeSlider = document.getElementById("volume");
const playButton = document.querySelector("button"); 

const confetti = document.querySelector('script');
const makeConfetti = new JSConfetti();
function init() {
  var confetti = new JSConfetti;
  // Changes horn image & audio 
  hornDropdown.addEventListener('change',(event) => {
    const hornImage = document.querySelector("img");
    hornImage.src = `assets/images/${event.target.value}.svg`

    const hornAudio = document.querySelector("audio");
    hornAudio.src =  `assets/audio/${event.target.value}.mp3`
  });

  // changes volume sound and image based on value of slider
  volumeSlider.addEventListener('change',(event) => {
    const imgAudio = document.getElementById("volume-controls").querySelector("img");

    // get audio element 
    const audioElem = document.querySelector("audio");
    // cases for slider image
    if (volumeSlider.value == 0) {
      imgAudio.src = `assets/icons/volume-level-0.svg`
      audioElem.volume = 0;
    }
    else if (volumeSlider.value > 0 && volumeSlider.value < 33) {
      imgAudio.src = `assets/icons/volume-level-1.svg`;
      audioElem.volume = volumeSlider.value / 100; 
    }
    else if (volumeSlider.value >= 33 && volumeSlider.value < 67) {
      imgAudio.src = `assets/icons/volume-level-2.svg`;
      audioElem.volume = volumeSlider.value / 100;
    }
    else {
      imgAudio.src = `assets/icons/volume-level-3.svg`
      audioElem.volume = volumeSlider.value / 100;
    }
  });

  // plays correct audio source
  playButton.addEventListener('click' , (event) => {
    const hAudio = document.querySelector("audio");
    if (hornDropdown.value == "party-horn") {
      makeConfetti.addConfetti();
    }
    else {
      hAudio.play();
    }
  });


}