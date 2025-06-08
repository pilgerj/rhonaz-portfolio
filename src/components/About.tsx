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
      <p>------------------------------------------------------------------</p>
      <p>                                                          </p>
      <p>  defeito de audio                                        </p>
      <p>  origem Brasileira                                    </p>
      <p>  funk & musicas eletricas piratas                            </p>
      <p>                                                       </p>
      <p>------------------------------------------------------------------</p>
      <p>com 10 anos baixei o Virtual DJ e nao parei mais. com 15 baixei o FL Studio e com 18 ja tocava em alguns roles. depois de um tempo criei "dj rhonaz", onde produzo FUNK BRASILEIRO 🇧🇷 e outros generos como drum n bass, trap, edm...</p>
      <p>reconheco boas conquistas vendo outros DJs tocando minhas músicas em festas e rádios que gosto (Submundo808, Trevvo, Veneno.live, festas na Europa, Japão) e lancando musicas </p>
      <p>pelo coletivo{' '}
        <a href="https://open.spotify.com/intl-pt/artist/0AUACd2vK9qI3fTMHU4jSH?si=p951T2PtQFaumaTt7HRRuQ" target="_blank" rel="noopener noreferrer">
          Humildes do Som Coletivo
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