import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 dj rhonaz - xorna bass . All rights reserved.</p>
      <div className="social-links">
        <a href="https://instagram.com/rhonaz.pilger" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://wa.me/5551995022584?text=oi%20dj%20rhonaz" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="https://open.spotify.com/intl-pt/artist/7lRJoEeNJA0OdsiJQQHaNX?si=jmtKTmQjQCylfI7rsRZqWQ" target="_blank" rel="noopener noreferrer">Spotify</a>
        <a href="https://soundcloud.com/rhonaz" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        <a href="https://www.youtube.com/@rhonaz/videos" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://dj-rhonaz.bandcamp.com/" target="_blank" rel="noopener noreferrer">BandCamp</a>
      </div>
    </footer>
  );
};

export default Footer;