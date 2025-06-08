import React, { useState, useEffect } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import '../styles/Home.css';
import peido from '../assets/peido.wav';
import brasil from '../assets/brasil.wav';
const Home: React.FC = () => {
  const [loadingBar, setLoadingBar] = useState('');
  const [position, setPosition] = useState({ top: '20%', left: '20%' });

  useEffect(() => {
    const frames = ['*', '✧', '✦', '✯', '✰', '✯', '✦', '✧'];
    let currentFrame = 0;

    const interval = setInterval(() => {
      setLoadingBar(frames[currentFrame]);
      currentFrame = (currentFrame + 1) % frames.length;
    }, 100);
    const interval2 = setInterval(() => {
      handleMouseEnter()
    }, Math.random() * ( 1000 - 500) + 500);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const handleMouseEnter = () => {
    const positions = [
      { top: `${Math.random() * 100}%`, left: `${Math.random() * 36}%` },
      { top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` },
      { top: `${Math.random() * 32}%`, left: `${Math.random() * 55}%` },
      { top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` },
      { top: `${Math.random() * 45}%`, left: `${Math.random() * 76}%` },
      { top: `${Math.random() * 14}%`, left: `${Math.random() * 12}%` },
      { top: `${Math.random() * 30}%`, left: `${Math.random() * 4}%` },
      { top: `${Math.random() * 100}%`, left: `${Math.random() * 54}%` }
    ];
    
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    setPosition(randomPosition);
  };

  const handleClick = () => {
    new Audio(peido).play();
    new Audio(brasil).play();
    window.open('https://www.pudim.com.br/', '_blank');
    // TOMA PEIDO E TRACK DE GRAÇA
    window.open('https://drive.google.com/drive/folders/1WSNwk4ZwBWh8qoydDbW1TeaEhccSiqim?usp=drive_link', '_blank');
  };

  return (
    <div className="home-container"  onClick={handleClick}
    >
      <div className="home-header">
        <div 
          className="loading-animation"
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
        >
          {loadingBar}
        </div>
      </div>
    </div>
  );
};

export default Home; 