const DropdownMenu = ({children}) => {
	return (
		<>
			<nav className="menu__body">
				<ul className="menu__list">
					{children}
				</ul>
			</nav>
		</>
	);
}

export default DropdownMenu;