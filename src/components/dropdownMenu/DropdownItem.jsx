const DropdownItem = ({children}) => {
	return (
		<>
			<li className="nav__item">
				<a href="#" className="nav__icon">
					{children}
				</a>
			</li>
		</>
	);
}

export default DropdownItem