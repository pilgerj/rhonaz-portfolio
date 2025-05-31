import React from 'react';

interface MusicRelease {
  title: string;
  type: string;
  year: number;
  link: string;
}

const MusicReleases: React.FC = () => {
  const releases: MusicRelease[] = [
    {
      title: 'PANIN ft. ' + 
             'Dj Theuzz',
      type: 'single',
      year: 2025,
      link: 'https://soundcloud.com/rhonaz/panin'
    },
    {
      title: 'DICOPANA ft. ' + 
             'LOFIHOUSEBOY',
      type: 'single',
      year: 2025,
      link: 'https://soundcloud.com/artigo016/rhonaz-kera?in=rhonaz/sets/kera-artigo016-rhonaz'
    },
    {
      title: 'KERA ft. Artigo016',
      type: 'single',
      year: 2025,
      link: 'https://soundcloud.com/artigo016/rhonaz-kera?in=rhonaz/sets/kera-artigo016-rhonaz'
    },
    {
      title: 'KIT KATRINA',
      type: 'single',
      year: 2025,
      link: 'https://soundcloud.com/rhonaz/kit-katrina-dj-rhonaz'
    },
    {
      title: 'Desastre Ritmo',
      type: 'album',
      year: 2024,
      link: 'https://open.spotify.com/track/...'
    },
    {
      title: 'Ritmando Laje',
      type: 'set',
      year: 2024,
      link: 'https://open.spotify.com/track/...'
    },
    {
      title: 'Fikadi ft. Zero',
      type: 'single',
      year: 2024,
      link: 'https://open.spotify.com/track/...'
    },
    {
      title: 'Pompoarismo',
      type: 'remix',
      year: 2025,
      link: 'https://open.spotify.com/track/...'
    }
  ];

  return (
    <div className="y2k-content-area-musicas">
      <pre className="terminal-style">
        <p>drops</p>
        <p>-----------------------------------------------------------------------</p>
        <p>  NOME                       TIPO            ANO       LINK   </p>
        <p>-----------------------------------------------------------------------</p>
        {releases.map((release, index) => (
          <p key={index}>
            {`  ${release.title.padEnd(26)} ${release.type.padEnd(15)} ${release.year}      `}
            <a target="_blank" rel="noopener noreferrer" href={release.link}> 📀 </a>
          </p>
        ))}
        <p>                                                       </p>
        <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      </pre>
    </div>
  );
};

export default MusicReleases; 