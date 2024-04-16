function togglePlayPause(audioId, buttonId) {
    var audio = document.getElementById(audioId);
    var button = document.getElementById(buttonId);

    if (audio.paused) {
      audio.play();
      button.innerHTML = "Pauza";
    } else {
      audio.pause();
      button.innerHTML = "Pusti";
    }
  }

  function downloadSong(audioId, buttonId) {
    var audio = document.getElementById(audioId);
    var button = document.getElementById(buttonId);

    // Uzmi putanju pesme iz data-src atributa dugmeta
    var songPath = button.getAttribute('data-src');

    // Kreiraj link za preuzimanje
    var downloadLink = document.createElement('a');
    downloadLink.href = songPath;
    downloadLink.download = 'naziv_pjesme.mp3';

    // Dodaj link u dokument i kliknite na njega
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Promenite izgled dugmeta nakon preuzimanja
    button.style.backgroundColor = '#4CAF50'; // Tamnija boja za indikaciju preuzimanja
    button.innerHTML = "Preuzeto";
    button.disabled = true; // Onemogućavanje ponovnog klika nakon preuzimanja
}

function updateProgressBar(audioId, progressBarId, playButtonId) {
    var audio = document.getElementById(audioId);
    var progressBar = document.getElementById(progressBarId);
    var playButton = document.getElementById(playButtonId);

    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';

    if (audio.currentTime === audio.duration) {
        progressBar.style.width = '0%';
        playButton.innerHTML = 'Play';
    }
}