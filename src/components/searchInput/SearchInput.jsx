import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./SearchInput.scss"

const SearchInput = ({func}) => {

	let inputRef = useRef();

	useEffect(() => {

		let handler = e => {
			if(!inputRef.current.contains(e.target)) {
				func(false);
			}
		}

		document.addEventListener('mousedown', handler);

		return() => {
			document.removeEventListener('mousedown', handler);
		}
	}, [])

	return(
		<>
			<motion.div 
				ref={inputRef}
				className="menu__search search-menu"
				initial={{width: "0&", opacity: 0}}
				animate={{width: "100%", opacity: 1}}
				transition={{duration: .9}}>
				<div className="search-menu__content">
					<input
						className="search-menu__input"
						type="text" 
						placeholder="Search..."
						onChange={e => setSearch(e.target.value)}/>
					<ul className="search-menu__list">
						{/* {items} */}
					</ul>
				</div>
			</motion.div>
		</>
	)
}


export default SearchInput;