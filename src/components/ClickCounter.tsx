import React, { useState, useEffect } from 'react';
import '../styles/Y2KLayout.css';
import som from '../assets/som.gif';
import som2 from '../assets/som2.gif';
const ClickCounter: React.FC = () => {

  return (
<>
    <div style={{display: 'flex', flexDirection: 'row', position: 'absolute', bottom: '10px', left: '10px'}}>
      <img src={som} alt="giphy" style={{width: '100px', height: '170px'}}/>
    </div>
    <div style={{display: 'flex', flexDirection: 'column',position: 'absolute', left: '50%', bottom: '20px', transform: 'translateX(-50%)'}}>
      <img src={som2} alt="cd2" style={{width: '200px', height: '100px'}} />
    </div>
    <div style={{display: 'flex', flexDirection: 'row',position: 'absolute', bottom: '10px', right: '10px'}}>
      <img src={som} alt="giphy" style={{width: '100px', height: '170px'}}/>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', position: 'absolute', left: '50%', bottom: '120px', transform: 'translateX(-50%)'}}>
      <p>Clique na estrela e ganhe um presente 🎁</p>
    </div>
    </>
  );
};

export default ClickCounter; 