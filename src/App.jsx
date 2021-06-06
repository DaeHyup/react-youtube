import React, { useEffect, useState } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState(['hyup']);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const API_KEY = process.env.REACT_APP_GOOGLE_OAUTH_API_KEY;
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResult=25&key=${API_KEY}`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);
  return <h1>Hello :) </h1>;
}

export default App;
