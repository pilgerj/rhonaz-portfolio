import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MoreInfoButton.css"; // Importa o CSS

const MoreInfoButton = (isOpen, setIsOpen) => {
  return (
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
              <h2>Meu corre</h2>
              <p>
                Lembro de ter 10 anos quando baixei o 'Virtual DJ', e comecei a brincar com as musicas que eu escutava. 
                Desde então não parei mais, aos 16 anos comecei a tocar em algumas festas
                e aos 19 criei o projeto "PLGR", onde toquei muitas vezes na minha cidade e região (Taquara - RS)
                Quando fiz 22 anos criei o projeto "dj rhonaz", meu projeto como produtor de FUNK BRASILEIRO e outros gêneros eletrônicos (Drum N Bass, Trap, EDM...)
                Estou muito feliz com meu trabalho e pelas conquistas que venho realizando, como outros DJs tocando minhas músicas em festas que gosto muito (Submundo808 e Trevvo - SP)
                e em estar participando do coletivo
                
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="close-button"
              >
                Fechar
              </button> 
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoreInfoButton;
