import { useState, useEffect, useRef } from "react";


const DropdownItem = ({item, children}) => {

	const [active, setActive] = useState(false);

	let menuRef = useRef();

	useEffect((e) => {

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

	const handleLock = () => {
		setLock(!lock)
		lock ? document.body.classList.add('lock') : document.body.classList.remove('lock') 
	}

	return (
		<>
			<li className="menu__item text" ref={menuRef}>
				<a href="#" onClick={() => setActive(!active)} className="menu__link">{item}</a>
				{active ? children : null}
			</li>
		</>
	);
}

export default DropdownItem;