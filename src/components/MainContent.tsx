import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
import "./MoreInfoButton.css"; // Importa o CSS

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <button
            onClick={() => setIsOpen(true)}
            className="open-button"
          >
            mais sobre mim
          </button>
        </div>
      </div>
      {/* <MoreInfoButton /> */}
      <div className="container">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} // Fecha ao clicar fora
            >
              <motion.div
                className="modal-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro
              >
                <h2>meu corre</h2>
                <p>
                  {`Lembro de ter 10 anos quando baixei o 'Virtual DJ' e comecei a brincar, 
                  Desde então não parei mais. Aos 16 anos comecei a tocar em algumas festas
                  e aos 19 criei o projeto "PLGR", onde toquei muitas vezes na minha cidade e região (Taquara - RS).
                  Quando fiz 22 anos criei o projeto "dj rhonaz" onde produzo FUNK BRASILEIRO e outros gêneros eletrônicos (Drum N Bass, Trap, EDM...).
                  Estou muito feliz com meu trabalho e conquistas, como outros DJs tocando minhas músicas em festas que gosto (Submundo808 e Trevvo - SP)
                  e em estar participando do coletivo `} 
                  <a href="https://open.spotify.com/intl-pt/artist/0AUACd2vK9qI3fTMHU4jSH?si=p951T2PtQFaumaTt7HRRuQ" target="_blank" rel="noopener noreferrer">
                  Humildes do Soundcloud
                  </a>
                  {`, onde lancei músicas em alguns álbuns e somei no `}
                  <a href="https://splice.com/sounds/packs/moment/pandemonium-a-humildes-do-sc-moment/samples" target="_blank" rel="noopener noreferrer">
                    Drumkit lançado na Splice
                  </a>.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="close-button"
                >
                  que tri 👍
                </button> 
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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