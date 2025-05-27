import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SlotMachine from './SlotMachine';
import AsciiArt from './AsciiArt';
import '../styles/Y2KLayout.css';
import { Home } from 'lucide-react';

interface Y2KLayoutProps {
  children?: React.ReactNode;
}

const Y2KLayout: React.FC<Y2KLayoutProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>('A');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', label: 'Home', path: '/', button: 'A' },
    { id: 'sobre', label: 'Sobre', path: '/sobre', button: 'B' },
    { id: 'musicas', label: 'Músicas', path: '/musicas', button: 'C' },
    { id: 'extra', label: 'Extra', path: '/extra', button: 'D' },
  ];

  const handleButtonClick = (button: string) => {
    const menuItem = menuItems.find(item => item.button === button);
    if (menuItem) {
      setSelectedMenu(menuItem.button);
      navigate(menuItem.path);
    }
  };

  return (
    <div className="y2k-window">
      <div className="y2k-title-bar">
        <div className="y2k-title-bar-left">
          {/* <div className="y2k-icon">📀</div> */}
          <div className="y2k-title">rhonaz-v0</div>
        </div>
        <div className="y2k-title-bar-right">
          <button className="y2k-window-button minimize">x</button>
          <button className="y2k-window-button maximize">x</button>
          <button className="y2k-window-button close">×</button>
        </div>
      </div>
      
      <div className="y2k-menu-bar">
        <div className="y2k-menu-item" style={{color: 'red'}} onClick={() => handleButtonClick('A')}><p>♠</p></div>
        <div className="y2k-menu-item" style={{color: 'black'}} onClick={() => handleButtonClick('B')}><p>♣</p></div>
        <div className="y2k-menu-item" style={{color: 'red'}} onClick={() => handleButtonClick('C')}><p>♥</p></div>
        <div className="y2k-menu-item" style={{color: 'black'}}onClick={() => handleButtonClick('D')}><p>♦</p></div>
      </div>

      <div className="y2k-main">
        <div className="y2k-screen">
          <AsciiArt />
          {selectedMenu === 'A' && (
            <div className="y2k-content-area-">
            </div>
          )}
          {selectedMenu === 'B' && (
            <div className="y2k-content-area-sobre">  
              <>
              <p>                       rhonaz.exe                      </p>
              <p>----------------------------------------------------</p>
              <p>                                                          </p>
              <p>  audio malware                                        </p>
              <p>  origem Brasileira                                    </p>
              <p>  funk & musicas eletricas                             </p>
              <p>                                                       </p>
              <p>----------------------------------------------------</p>
              <p>Aos 10 anos baixei o 'Virtual DJ',desde então não parei mais. Com 13 fiz uma rádio online com meu amigo, aos 16 comecei a tocar em algumas festas</p>
              <p>e aos 18 criei o projeto "PLGR", Aos 21 anos criei o "dj rhonaz" onde produzo FUNK BRASILEIRO e outros gêneros (Drum N Bass, Trap, EDM...).</p>
              <p>Estou muito feliz com meu trabalho e conquistas, como outros DJs tocando minhas músicas em festas e rádios que gosto (Submundo808, Trevvo, Veneno.live)</p>
              </>
            </div>
          )}
          {selectedMenu === 'C' && (
            <div className="y2k-content-area-musicas">
              <p>                    lancamentos                    </p>
              <p>------------------------------------------------------</p>
              <p>  DROP                TIPO           ANO       LINK   </p>
              <p>------------------------------------------------------</p>
              <p>  KERA ft. Artigo016    single         2025      <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/artigo016/rhonaz-kera?in=rhonaz/sets/kera-artigo016-rhonaz"> 📀 </a>     </p>
              <p>  KIT KATRINA           single         2025      <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/rhonaz/kit-katrina-dj-rhonaz"> 📀 </a>     </p>
              <p>  Desastre Ritmo        album          2024      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/..."> 📀 </a>     </p>
              <p>  Ritmando Laje         set            2024      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/..."> 📀 </a>     </p>
              <p>  Fikadi ft. Zero       single         2024      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/..."> 📀 </a>     </p>
              <p>  Pompoarismo           remix          2025      <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/track/..."> 📀 </a>     </p>
              <p>                                                       </p>
              <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
            </div>
          )}
          {selectedMenu === 'D' && <></>}
        </div>
      </div>

      <div className="y2k-status-bar">
        <div className="y2k-status-left">999 - fe' pra tudo  </div>
        <div className="y2k-status-right">© que voce venca em 2025  </div>
      </div>
    </div>
  );
};

export default Y2KLayout; 