// Load audio files
const sounds = {
  rain: new Audio("wind.mp3"), // Replace with your file path/name
  wind: new Audio("rain.mp3"), // Replace with your file path/name
};

// Loop them indefinitely
sounds.rain.loop = true;
sounds.wind.loop = true;

// Toggle play/pause
function toggleSound(name) {
  const sound = sounds[name];
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
  }
}

// Set volume
function setVolume(name, volume) {
  sounds[name].volume = volume;
}
