import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DropdownItem from "../dropdownMenu/DropdownItem";
import DropDownNest from "../dropdownMenu/DropDownNest";

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