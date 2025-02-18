import './Header.css';
import logo from '../assets/olho.png';

const Header = () => {
  return (
    <div className="header">
      <img className="logoHeader img-flip2" src={logo}></img>
      <h1 className="glitch">rhonaz</h1>
      {/* <p className="tagline">xorna bass do Brasil</p> */}
      <img className="logoHeader img-flip" src={logo}></img>
    </div>
  );
};

export default Header;