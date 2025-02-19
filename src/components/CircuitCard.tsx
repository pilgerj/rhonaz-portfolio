import React from 'react';
import bgCircuit from '../assets/music/circuito.png';

const mainStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    padding: 36,
    width: 250,
}
const containerStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: `url(${bgCircuit})`,
    flexDirection: 'column',
    backgroundSize: 'cover',
    marginTop: 8,
}

const bgStyle = {
    position: 'absolute',
    maxWidth: '300px',
    // filter: `drop-Shadow(0 0 20px var(--green))`,
}
const imageStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '120px',
    filter: `drop-Shadow(0 0 30px var(--green))`,
    marginBottom: 8,
}

const titleStyle = {
    fontSize: '1.2rem',
    margin: 0,
}
const subtitleStyle = {
    margin: 0,
    fontSize: '1rem',

}
const CircuitCard = ({ key, title, subtitle, imageUrl, url} ) => {
    return (
        <div style={mainStyle}>
            <div key={key} style={containerStyle}>
                <img src={bgCircuit} style={bgStyle} />
                <a href={url} target="_blank">
                    <img src={imageUrl} style={imageStyle} />
                </a>
            </div>
            <h2 style={titleStyle}>{title}</h2>
            <p style={subtitleStyle}>{subtitle}</p>
        </div>            
    )
}

export default CircuitCard;