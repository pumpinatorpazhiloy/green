import { useState, useEffect, useRef } from "react";

const DropdownItem = ({item, children}) => {

	const [active, setActive] = useState(false);

	let menuRef = useRef();

	useEffect(() => {

		let handler = e => {
			if(!menuRef.current.contains(e.target)) {
				setActive(false);
			}
		}

		document.addEventListener('mousedown', handler);

		return() => {
			document.removeEventListener('mousedown', handler);
		}
	}, [])

	return (
		<>
			<li className="menu__item text" ref={menuRef}>
				<a onClick={() => setActive(!active)} className="menu__link">{item}</a>
				{active ? children : null}
			</li>
		</>
	);
}

export default DropdownItem;