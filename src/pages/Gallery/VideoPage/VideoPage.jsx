import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "../../../assets/styles/VideoPage.scss"; 

function VideoPage() {
  const channelId = "UCg3ktCewoRk8pjv1643TrKA"; 
  const apiKey = "AIzaSyA2gmsDve3Hzj1GgatF11y7HNSmrfmhN5E"; 
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId=${channelId}&type=video&key=${apiKey}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [channelId, apiKey]);

  return (
    <section>
      
      <ul className="video-grid"> 
        {videos.map((video) => (
          <li key={video.id.videoId} className="video-item"> 
            <h3 className='video-grid_title'>{video.snippet.title}</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VideoPage;