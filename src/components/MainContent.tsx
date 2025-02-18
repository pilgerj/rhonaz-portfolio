import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import './MainContent.css';
import SocialEmbeds from './SocialEmbeds';
import avatar from '../assets/corpo2.png';
import MoreInfoButton from './MoreInfoButton';
import Placar from './Placar';

const MainContent = () => {

  return (
    <main className="main-content">
      <div className="intro">
        <div>
          {/* <img src={avatar}></img> */}
          <motion.img
            src={avatar}
            alt={"rhonaz-img"}
            className="w-64 h-auto rounded-xl shadow-lg"
            animate={{
              y: [0, -1, 0], // Movimento vertical
              opacity: [0.8, 1, 0.8], // Transparência suave
              rotate: [0, 0.1 -0.5], // Pequena rotação
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "easeOut",
              
            }}
          />
        </div>
        <div>
          <h2>dj e produtor musical</h2>
          <p>eletricidade e ritmos brasileiros</p>
          <MoreInfoButton />
        </div>
      </div>
      <div>


        <div className="music-player">
        <div className="intro" style={{ marginBottom: '12px' }}>
          {/* <h2>Considero minhas músicas como Funk Experimental</h2> */}
          <p>55.000+ plays no Spotify e 42.000+ plays no SoundCloud</p>
        </div>
          <SocialEmbeds />
        </div>
      </div>
    </main>
  );
};

export default MainContent;