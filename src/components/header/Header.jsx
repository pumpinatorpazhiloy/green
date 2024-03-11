import { useState } from "react";

import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DropdownItem from "../dropdownMenu/DropdownItem";
import DropDownNest from "../dropdownMenu/DropDownNest";
import { slide as Menu } from 'react-burger-menu'

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
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="type" className="menu-item" href="/plantsType">Plants Type</a>
				<a id="more" className="menu-item" href="/more">More</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
			</Menu>
			<header className="header">
				<div className="container">
					<div className="header__menu menu">
						<a href="/"className="header__logo">
							<div className="menu__logo"><img src={logo} alt="logo"/></div>
							<div className="menu__title">Planto.</div>
						</a>
						<DropdownMenu>
							<DropdownItem item={'Home'}/>
							<DropdownItem item={'Plants Type'}>
								<DropDownNest/>
							</DropdownItem>
							<DropdownItem item={'More'}/>
							<DropdownItem item={'Contact'}/>
						</DropdownMenu>
						<div className="menu__icons icons">
							<button className="icons__search">
								<img src={search} alt="search"/>
							</button>
							<button className="icons__shoppingCart">
								<img src={cart} alt="shopping cart"/>
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;