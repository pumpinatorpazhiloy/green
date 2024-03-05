import { useState } from "react";

const DropdownItem = ({item, children}) => {

	const [active, setActive] = useState(false);

	return (
		<>
			<li className="menu__item text">
				<a href="#" onClick={() => setActive(!active)} className="menu__link">{item}</a>
				{active ? children : null}
			</li>
		</>
	);
}

export default DropdownItem