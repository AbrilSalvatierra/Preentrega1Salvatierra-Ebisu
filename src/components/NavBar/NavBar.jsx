import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
 return (
  <nav>
    <a href="#" className="logo">Ebisu</a>
    <ul>  
      <li>Home</li>
      <li>Works</li>
      <li>About Us</li>
      <li>Contact</li>
      <li><CartWidget/></li>
    </ul>
  </nav>
  );
}

export default NavBar;