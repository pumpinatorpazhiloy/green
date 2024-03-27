import { useState } from "react";
import { Link } from "react-router-dom";

import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DropdownItem from "../dropdownMenu/DropdownItem";
import DropDownNest from "../dropdownMenu/DropDownNest";
import { slide as Menu } from 'react-burger-menu'
import { motion } from "framer-motion";
import SearchInput from "../searchInput/SearchInput";

import logo from "../../img/header/logo.png";
import search from "../../img/header/search.png";
import burger from "../../img/header/burger.png";
import cart from "../../img/header/cart.png";

import "./Header.scss";

const Header = () => {

	const [lock, setLock] = useState(false);

	const handleLock = () => {
		setLock(!lock)
		lock ? document.body.classList.add('lock') : document.body.classList.remove('lock') 
	}

	return (
		<>
			<Menu onStateChange={handleLock} right customBurgerIcon={ <img src={burger} /> }>
				<Link id="home" className="menu-item" to="/">Home</Link>
				<Link id="type" className="menu-item" to="/plantsType">Plants Type</Link>
				<Link id="more" className="menu-item" to="/more">More</Link>
				<Link id="contact" className="menu-item" to="/contact">Contact</Link>
			</Menu>
			<motion.header
				className="header"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: .9}}>
				<div className="container">
					<div className="header__menu menu">
						<Link to="/" className="header__logo">
							<div className="menu__logo"><img src={logo} alt="logo"/></div>
							<div className="menu__title">Planto.</div>
						</Link>
						<DropdownMenu>
							<Link to='/'>
								<DropdownItem item={'Home'}/>
							</Link>
							<DropdownItem item={'Plants Type'}>
								<DropDownNest/>
							</DropdownItem>
							<Link to="/more">
								<DropdownItem item={'More'}/>
							</Link>
							<Link to='/contact'>
								<DropdownItem item={'Contact'}/>
							</Link>
						</DropdownMenu>
						<div className="menu__icons icons">
							{/* <button className="icons__search">
								<img src={search} alt="search"/>
							</button> */}
							<SearchInput/>
							<Link to='/cart'>
								<button className="icons__shoppingCart">
									<img src={cart} alt="shopping cart"/>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</motion.header>
		</>
	);
};

export default Header;