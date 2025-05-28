import React, { useEffect, useRef, useState } from 'react';

const RAW_ART = [
  '                 __....__                 ',
  '             .gd$$$$$$$$$$bp.             ',
  '          .-"^^^T$$$$$$$$$$$$$p.          ',
  '        .\'       "^T$$$$$$$$$$$$b.       ',
  '      .\'            `T$$$$$$$$$$$$b.     ',
  '     /     .d$$b.     T$$$$$$$$$$$$$b     ',
  '    /     d$$$$$$b     $$$$$$$$$$$$$$b    ',
  '   :     :$$$$$$$$;    :$$$$$$$$$$$$$$;   ',
  '   ;      T$$$$$$P     :$$$$$$$$$$$$$$$   ',
  '  :        "^$$^"      $$$$$$$$$$$$$$$$;  ',
  '  ;                   d$$$$$$$$$$$$$$$$$  ',
  '  |                 .d$$$$$$$$$$$$$$$$$$  ',
  '  ;                d$$$$$$$$$$$$$$$$$$$$  ',
  '  :               :$$$$$$P^""^T$$$$$$$$;  ',
  '   ;              $$$$$$P      T$$$$$$$   ',
  '   :              $$$$$$        $$$$$$;   ',
  '    \             :$$$$$b      d$$$$$P    ',
  '     \             T$$$$$bp..gd$$$$$P     ',
  '      `.            `T$$$$$$$$$$$$P\'     ',
  '        `.            "^$$$$$$$$P\'       ',
  '          "-.            "^^T$P\'         ',
  '             "--...____...--"             '
];

const SIZE_Y = RAW_ART.length;
const SIZE_X = RAW_ART[0].length;
const CENTER_X = (SIZE_X - 1) / 2;
const CENTER_Y = (SIZE_Y - 1) / 2;
const FPS = 24;

// Convert the art to a grid of points (true for dot, false for space)
function getDotGrid() {
  return RAW_ART.map(row =>
    row.split('').map(ch => (ch !== ' ' ? '.' : ' '))
  );
}

function rotateGrid(grid: string[][], angle: number): string[][] {
  const newGrid: string[][] = Array.from({ length: SIZE_Y }, () => Array(SIZE_X).fill(' '));
  for (let y = 0; y < SIZE_Y; y++) {
    for (let x = 0; x < SIZE_X; x++) {
      if (grid[y][x] === '.') {
        // Rotate point (x, y) around center with horizontal rotation
        const dx = x - CENTER_X;
        const dy = y - CENTER_Y;
        const r = Math.sqrt(dx * dx + dy * dy);
        const theta = Math.atan2(dy, dx) + angle;
        const rx = Math.round(CENTER_X + r * Math.cos(theta));
        const ry = Math.round(CENTER_Y + r * Math.sin(theta));
        if (
          rx >= 0 && rx < SIZE_X &&
          ry >= 0 && ry < SIZE_Y
        ) {
          if(ry % 2 === 0) {
            newGrid[ry][rx] = '.';
          } else if (rx % 2 === 0) {
            newGrid[ry][rx] = '~';
          } else {
            newGrid[ry][rx] = '*';
          }
        }
      }
    }
  }
  return newGrid;
}

const AsciiArt = () => {
  const [angle, setAngle] = useState(0);
  const [art, setArt] = useState<string>('');
  const intervalRef = useRef<number | null>(null);
  const dotGrid = useRef(getDotGrid());

  useEffect(() => {
    function draw() {
      const rotated = rotateGrid(dotGrid.current, angle);
      const lines = rotated.map(row => row.join(''));
      setArt(lines.join('\n'));
    }
    draw();
  }, [angle]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setAngle(a => a + Math.PI / 30); // Increased rotation speed for better horizontal effect
    }, 1000 / FPS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ width: '100%', position: 'absolute', top: 30, left: 0, justifyContent: 'center', alignItems: 'center' }}>
      <pre style={{ fontFamily: 'monospace', lineHeight: '90%', fontSize: '12px', color: 'var(--main-color)' }}>{art}</pre>
    </div>
  );
};

export default AsciiArt;