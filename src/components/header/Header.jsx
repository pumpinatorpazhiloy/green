import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DropdownItem from "../dropdownMenu/DropdownItem";


import logo from "../../img/header/logo.png";
import search from "../../img/header/search.png";
import burger from "../../img/header/burger.png";
import cart from "../../img/header/cart.png";

import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__menu menu">
					<a href="/"className="header__logo">
						<div className="menu__logo"><img src={logo} alt="logo"/></div>
						<div className="menu__title">Planto.</div>
					</a>
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item text"><a href="" className="menu__link">Home</a></li>
							<li className="menu__item text"><a href="" className="menu__link">Plants Type</a></li>
							<DropdownMenu>
								<DropdownItem icon={'Plants Type'}/>
							</DropdownMenu>
							<li className="menu__item text"><a href="" className="menu__link">More</a></li>
							<li className="menu__item text"><a href="" className="menu__link">Contact</a></li>
						</ul>
					</nav>
					<div className="menu__icons icons">
						<button className="icons__search">
							<img src={search} alt="search"/>
						</button>
						<button className="icons__shoppingCart">
							<img src={cart} alt="shopping cart"/>
						</button>
						<button className="icons__burger">
							<img src={burger} alt="burger"/>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;