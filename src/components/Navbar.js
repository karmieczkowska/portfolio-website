import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const location = useLocation();

  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const [color, setColor] = useState(false);
  const changeColor = () => {
	if(window.scrollY >= 100) {
		setColor(true);
	} else {
		setColor(false);
	}
  };

  window.addEventListener("scroll", changeColor);

  useEffect(() => {
    showNavbar(false);
  }, [location]);


	return (
		<header className={color ? "header-bg" : "header"}>
			<h3 className="logo"> <Link to="/portfolio-website"> Portfolio. </Link></h3>
			<nav ref={navRef} className="links">
        <Link to="/portfolio-website"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}
      >
				<FaBars />
			</button>
		</header>
	);
}



export default Navbar;