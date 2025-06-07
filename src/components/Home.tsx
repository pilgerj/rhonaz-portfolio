import React, { useState, useEffect } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import '../styles/Home.css';

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

  return (
    <div className="home-container">
      <div className="home-header">
        {/* <HomeIcon size={24} /> */}
        {/* <h1>Welcome to Ritmo Torto</h1> */}
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
        >
          {loadingBar}
        </div>
      </div>
      
{/*       
      <div className="home-content">
        <div className="home-section">
          <h2>🎵 Latest Updates</h2>
          <p>Check out my latest music releases and upcoming shows!</p>
        </div>

        <div className="home-section">
          <h2>🎸 About Me</h2>
          <p>Musician, producer, and digital artist exploring the intersection of music and technology.</p>
        </div>

        <div className="home-section">
          <h2>📱 Connect</h2>
          <div className="social-links">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">SoundCloud</a>
            <a href="#" className="social-link">YouTube</a>
           </div>
         </div> 
       </div>*/}
    </div>
  );
};

export default Home; 