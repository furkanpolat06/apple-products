import "./Navbar.scss"
import logo from "../../helpers/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
       <div className="links">
        <a href="#iphone">Iphone</a>
        <a href="#macbook">Macbook</a>
        <a href="#ipad">Ipad</a>
        <a href="#others">Others</a>

       </div>
       <div>
        
       </div>

    </div>
  )
}

export default Navbar