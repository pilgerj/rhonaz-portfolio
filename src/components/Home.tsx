import React, { useState, useEffect } from 'react';
import { Home as HomeIcon } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [loadingBar, setLoadingBar] = useState('');

  useEffect(() => {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let currentFrame = 0;

    const interval = setInterval(() => {
      setLoadingBar(frames[currentFrame]);
      currentFrame = (currentFrame + 1) % frames.length;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        {/* <HomeIcon size={24} /> */}
        {/* <h1>Welcome to Ritmo Torto</h1> */}
        <div className="loading-animation">
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