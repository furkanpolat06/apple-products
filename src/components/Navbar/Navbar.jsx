import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
      <a href="#all">All </a>
        <a href="#iphone">Iphone </a>
        <a href="#macbook">Macbook</a>
        <a href="#ipad">Ipad</a>
        
        <a href="#others">Others </a>
      </div>
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
    </div>
  );
};
export default Navbar;
