document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    let currentVideo = 0;

    // Make sure first video is active from the start
    videos[0].classList.add('active');

    // Wait for the first video to be ready before starting
    videos[0].addEventListener('loadeddata', function() {
        // Start all videos
        videos.forEach(video => {
            video.play().catch(function(error) {
                console.log("Video play failed:", error);
            });
        });

        // Start the switching interval
        setInterval(switchVideo, 5000);
    });

    function switchVideo() {
        videos[currentVideo].classList.remove('active');
        currentVideo = (currentVideo + 1) % videos.length;
        videos[currentVideo].classList.add('active');
    }
});