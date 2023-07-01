import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../../assets/styles/VideoPage.scss";

function VideoPage() {
  const channelId = process.env.REACT_APP_API_CHANNELID_VIDEO;
  const apiKey = process.env.REACT_APP_API_KEY_VIDEO;
  const apiUrl = process.env.REACT_APP_API_URL_VIDEO;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/search?part=snippet&maxResults=10&channelId=${channelId}&type=video&key=${apiKey}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, [channelId, apiKey, apiUrl]);

  return (
    <section>
      <ul className="video-grid">
        {videos.map((video) => (
          <li key={video.id.videoId} className="video-item">
            <h3 className="video-grid_title">{video.snippet.title}</h3>

            <iframe
              className="video-container"
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