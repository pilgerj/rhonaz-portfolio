import './App.css'

function App() {
  return (
    <>
      <h1>dj rhonaz</h1>
      <div className="iframe-container">


      <iframe
        width="100%"
        height="450"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1680309441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <iframe
        style={{ borderRadius: '12px', marginLeft: 8 }}
        src="https://open.spotify.com/embed/artist/7lRJoEeNJA0OdsiJQQHaNX?utm_source=generator"
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
            </div>
    </>
  )
}

export default App
