

const DropdownMenu = ({children}) => {
	return (
		<>
			<nav className="navbar">
				<ul className="navbar__nav nav">
					{children}
				</ul>
			</nav>
		</>
	);
}

export default DropdownMenu;