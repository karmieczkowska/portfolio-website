import { useEffect, useRef } from "react";
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

  useEffect(() => {
    showNavbar(false);
  }, [location]);


	return (
		<header>
			<h3>Portfolio.</h3>
			<nav ref={navRef} className="links">
        <Link to="/"> Home </Link>
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