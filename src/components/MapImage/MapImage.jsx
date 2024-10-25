import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MapImage = ({ apiKey, latitude, longitude, width, height, zoom }) => {
  const [mapImageUrl, setMapImageUrl] = useState('');

  useEffect(() => {
    const mapImageRequest = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=${width}x${height}&key=${apiKey}`;
    
    axios
      .get(mapImageRequest)
      .then(response => {
        setMapImageUrl(response.config.url);
      })
      .catch(error => {
        console.error('Error fetching map image:', error);
      });
  }, [apiKey, latitude, longitude, width, height, zoom]);

  return <img src={mapImageUrl} alt="Map Location" />;
};

export default MapImage;
