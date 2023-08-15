
import React, { useEffect } from 'react';

function YouTubePlayer({ videoId }) {
  useEffect(() => {
    // This function creates the YouTube player after the API has loaded
    function createPlayer() {
      return new window.YT.Player('youtube-player', {
        videoId: videoId,
        width: '1000',
        height: '500',
      });
    }

    // Load the YouTube API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onload = () => {
      window.YT.ready(() => createPlayer());
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [videoId]);

  return <div id="youtube-player"></div>;
}

export default YouTubePlayer;

