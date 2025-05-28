import React from 'react';

const About: React.FC = () => {
  return (
    <div 
      className="y2k-content-area-sobre" 
      style={{ 
        maxHeight: '80vh', 
        overflowY: 'auto',
      }}
    >
      <style>
        {`
          .y2k-content-area-sobre::-webkit-scrollbar {
            width: 0px;
          }
          .y2k-content-area-sobre::-webkit-scrollbar-track {
            background: #000000;
          }
          .y2k-content-area-sobre::-webkit-scrollbar-thumb {
            background: #919191;
          }
        `}
      </style>
      <p>------------------------------------------------------------------</p>
      <p>                                                          </p>
      <p>  defeito de audio                                        </p>
      <p>  origem Brasileira                                    </p>
      <p>  funk & musicas eletricas piratas                            </p>
      <p>                                                       </p>
      <p>------------------------------------------------------------------</p>
      <p>com 10 anos baixei o 'Virtual DJ' e desde então não parei mais. Toquei em muitas festas e depois de um tempo criei "dj rhonaz", onde produzo FUNK BRASILEIRO e outros gêneros (Drum N Bass, Trap, EDM...).</p>
      <p>to muito feliz com meu trabalho e conquistas, como outros DJs tocando minhas músicas em festas e rádios que gosto (Submundo808, Trevvo, Veneno.live, festas na Europa, Japão) e por lançar músicas </p>
      <p>pelo coletivo{' '}
        <a href="https://open.spotify.com/intl-pt/artist/0AUACd2vK9qI3fTMHU4jSH?si=p951T2PtQFaumaTt7HRRuQ" target="_blank" rel="noopener noreferrer">
          Humildes do Soundcloud
        </a>
        {', que tambem somei no '}
        <a href="https://splice.com/sounds/packs/moment/pandemonium-a-humildes-do-sc-moment/samples" target="_blank" rel="noopener noreferrer">
          Drumkit lançado na Splice
        </a>.
      </p>
    </div>
  );
};

export default About; 