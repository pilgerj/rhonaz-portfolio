import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SlotMachine from './SlotMachine';
import AsciiArt from './AsciiArt';
import MusicReleases from './MusicReleases';
import About from './About';
import '../styles/Y2KLayout.css';
import { Home } from 'lucide-react';
import Footer from './Footer';
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
          <div className="y2k-title">ritmotorto_v0.sh</div>
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
          <Footer />
          {selectedMenu === 'A' && (
            <div className="y2k-content-area-">
            </div>
          )}
          {selectedMenu === 'B' && <About />}
          {selectedMenu === 'C' && (
            <MusicReleases />
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