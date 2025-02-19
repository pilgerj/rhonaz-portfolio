import React, { useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import './MainContent.css';
import SocialEmbeds from './SocialEmbeds';
import avatar from '../assets/corpo2.png';
import MoreInfoButton from './MoreInfoButton';
import Placar from './Placar';
import CircuitCard from './CircuitCard';
import desastreRitmoImg from '../assets/music/desastreritmo.jpeg';
import ritmandoLajeImg from '../assets/music/sethamburguer.png';
import fikadiImg from '../assets/music/fikadi.jpg';
import pompoarismoImg from '../assets/music/pompoarismo.jpg';

const MainContent = () => {

return (
    <main className="main-content">
      <div className="intro">
        <div>
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
      <div className="music-player">
        <div className="intro" style={{ marginBottom: '12px', flexDirection: 'column' }}>
          <p>100.000+ plays nas plataformas de stream</p>
          <div className="releases">
            <CircuitCard 
              key="1" 
              title={"DESASTRE RITMO"} 
              subtitle={"[ ALBUM ]"} 
              imageUrl={desastreRitmoImg}
              url={"https://open.spotify.com/intl-pt/album/1izHa5aDBA8rHLoC6UdP2X?si=Skmgjz14QxaDJVmwDRDfgg"}
            />
            <CircuitCard 
              key="2" 
              title={"RITMANDO NA LAJE"} 
              subtitle={"[ SET ]"} 
              imageUrl={ritmandoLajeImg}
              url={"https://www.youtube.com/watch?v=StRiM_XKpRI&t=1124s"}
            />
          </div>
          <div className="releases">
            <CircuitCard 
              key="3" 
              title={"FIK4DI feat. ZERO"} 
              subtitle={"[ SINGLE ]"} 
              imageUrl={fikadiImg}
              url={"https://open.spotify.com/intl-pt/album/1OeGvIAHdE2f0GhnJCMbKm?si=GiPR9llUQHmkc-vr_kl1rg"}

            />
            <CircuitCard 
              key="4" 
              title={"POMPOARISMO REMIX"} 
              subtitle={"[ SINGLE ]"} 
              imageUrl={pompoarismoImg}
              url={"https://soundcloud.com/rhonaz/mu540-bia-soull-pompoarismo-dj-rhonaz-remix"}

            />
          </div>
        </div>
        <SocialEmbeds />
      </div>
    </main>
  );
};

export default MainContent;