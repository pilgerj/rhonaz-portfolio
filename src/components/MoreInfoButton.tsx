import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MoreInfoButton.css"; // Importa o CSS

const MoreInfoButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      {/* Botão Saber Mais */}
      <button
        onClick={() => setIsOpen(true)}
        className="open-button"
      >
        mais sobre mim
      </button>

      {/* Modal */}
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
                {`Lembro de ter 10 anos quando baixei o 'Virtual DJ' e comecei a brincar. 
                Desde então não parei mais, aos 16 anos comecei a tocar em algumas festas
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
  );
};

export default MoreInfoButton;
