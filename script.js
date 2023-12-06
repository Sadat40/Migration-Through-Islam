const backgroundAudio = document.getElementById('backgroundAudio');
document.addEventListener("click", function() {
    // Add this part to play audio when the page loads

    // Listen for the 'ended' event and restart the audio when it finishes
    backgroundAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    });

    backgroundAudio.play();

});

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is 'p'
    if (event.key === "m") {
        toggleMute();
    }
    if (event.key === "p") {
        toggleUnmute();
    }

}); 
function toggleMute() {
    backgroundAudio.muted = !backgroundAudio.muted;
}

function toggleUnmute() {
    backgroundAudio.muted = false;
}

