import React, { useState, useEffect } from 'react';
import './SlotMachine.css';

const symbols = ['🍒', '🍊', '🍋', '🍇', '7️⃣', '💎'];

const SlotMachine: React.FC = () => {
  const [isPulling, setIsPulling] = useState(false);
  const [slots, setSlots] = useState(['🍒', '🍒', '🍒']);
  const [isRolling, setIsRolling] = useState(false);

  const pullLever = () => {
    if (isRolling) return;
    
    setIsPulling(true);
    
    // Start rolling after lever animation begins
    setTimeout(() => {
      setIsRolling(true);
      
      // Simulate slot machine rolling
      const rollInterval = setInterval(() => {
        setSlots([
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)]
        ]);
      }, 100);

      // Stop rolling after 2 seconds
      setTimeout(() => {
        clearInterval(rollInterval);
        setIsRolling(false);
        
        // Reset lever after slots stop
        setTimeout(() => {
          setIsPulling(false);
        }, 500);
      }, 2000);
    }, 200);
  };

  return (
    <div className="slot-machine">
      <div className="slot-display">
        {slots.map((symbol, index) => (
          <div 
            key={index} 
            className={`slot ${isRolling ? 'rolling' : ''}`}
          >
            {symbol}
          </div>
        ))}
      </div>
      <div 
        className={`lever ${isPulling ? 'pulled' : ''}`}
        onClick={pullLever}
      >
        <div className="lever-handle"></div>
      </div>
    </div>
  );
};

export default SlotMachine; 