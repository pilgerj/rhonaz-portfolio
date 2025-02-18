import '../App.css';

const SocialEmbeds = () => {
  // total plays spotify: 55k +
  // total plays sc: 42k +
    return (
        <div className="iframe-container">
        
        <iframe
          style={{ borderRadius: '12px'}}
          src="https://open.spotify.com/embed/artist/7lRJoEeNJA0OdsiJQQHaNX?utm_source=generator"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          width="100%"
          height="450"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1680309441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
    )
}
export default SocialEmbeds