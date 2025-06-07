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
             'DJ THEUZZ',
      type: 'SINGLE',
      year: 2025,
      link: 'https://open.spotify.com/intl-pt/track/0GjUlF6WWawO1New6waV9A?si=1fff65975dd14f06'
    },
    {
      title: 'DICOPANA ft. ' + 
             'LOFIHOUSEBOY',
      type: 'SINGLE',
      year: 2025,
      link: 'https://open.spotify.com/album/6N0BFmIknyeGKDlMfEaxwV?si=_ysJUbF3Qky4Xe7mbD1hyA'
    },
    {
      title: 'KERA ft. ARTIGO016',
      type: 'SINGLE',
      year: 2025,
      link: 'https://soundcloud.com/artigo016/rhonaz-kera?in=rhonaz/sets/kera-artigo016-rhonaz'
    },
    {
      title: 'KIT KATRINA',
      type: 'SINGLE',
      year: 2025,
      link: 'https://open.spotify.com/album/0unPFY4llwWh3oI2UYpZMu?si=YIbnBgKESjGgLobFVvsShg'
    },
    {
      title: 'FIK4DI ft. ZERO',
      type: 'SINGLE',
      year: 2025,
      link: 'https://open.spotify.com/album/1OeGvIAHdE2f0GhnJCMbKm?si=eKXYWgxzQ_iWGpIGxuIpYQ'
    },
    {
      title: 'POMPOARISMO',
      type: 'REMIX',
      year: 2025,
      link: 'https://soundcloud.com/rhonaz/mu540-bia-soull-pompoarismo-dj-rhonaz-remix'
    },
    {
      title: 'DESASTRE RITMO',
      type: 'ALBUM',
      year: 2024,
      link: 'https://open.spotify.com/album/1izHa5aDBA8rHLoC6UdP2X?si=W7tl_1wDSOeO2vLtGyvRMg'
    },
    {
      title: 'RITMANDO NA LAJE',
      type: 'LIVE SET',
      year: 2024,
      link: 'https://www.youtube.com/watch?v=StRiM_XKpRI&t=1352s'
    },
    {
      title: 'TAKA FOGO EM KIKSILVER',
      type: 'REMIX',
      year: 2024,
      link: 'https://open.spotify.com/album/0r1GI7ZUNc9QNNnBJEdsMY?si=tluQ6rubShydM96h1F5_nw'
    },
  ];

  return (
    <div className="y2k-content-area-musicas">
      <div>
        <pre className="terminal-style">
          <p style={{marginTop: 12 }}> últimos drops</p>
          <p>-----------------------------------------------------------------------</p>
          <p>  NOME                          TIPO            ANO     </p>
          <p>-----------------------------------------------------------------------</p>
          {releases.map((release, index) => (
            <a target="_blank" rel="noopener noreferrer" href={release.link}><p key={index}>
              {`  ${release.title.padEnd(28)} ${release.type.padEnd(16)} ${release.year}      `}
            </p>
            </a>
          ))}
          <p>                                                       </p>
          <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        </pre>
      </div>
      <div style={{margin: 12}}>
        <h2>playlist singles</h2>
        <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1680309441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
      <div style={{margin: 12}}>
        <h2>album desastre ritmo</h2>
        <iframe  width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1903232455&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
    </div>
  );
};

export default MusicReleases; 