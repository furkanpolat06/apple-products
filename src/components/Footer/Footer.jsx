import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <>
      {/*! *********FOOTER *******/}
      <footer id='footer' className="bg-dark text-center text-white p-2">
        <div className="mt-2 fa-2x">
          
          <FontAwesomeIcon className="p-2 footer_icons" icon={faInstagram} />
          <a href="https://www.linkedin.com/in/furkan-emin-polat/" target="_blank"><FontAwesomeIcon className="p-2 footer_icons " icon={faLinkedin} /></a>
          <FontAwesomeIcon className="p-2 footer_icons" icon={faYoutube} />
          <a href="https://github.com/furkanpolat06" target="_blank"><FontAwesomeIcon className="p-2   footer_icons" icon={faGithub} /></a>
          
        </div>
        <div id="physio_web" className="pb-3 h6">
          ©
          <a id='footer_link'
            className=" text-decoration-none"
            href="https://github.com/furkanpolat06"
            target="_blank"
          >
            Copyright by <span className="text-info lead fw-bold">PhysioWeb</span>{" "}
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
