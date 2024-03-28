import { useState, useEffect, useRef } from "react";
import useFetchData from "../../hooks/fetchData";
import { motion } from "framer-motion";

import "./SearchInput.scss"

const SearchInput = ({func}) => {

	const [allItems, setAllItems] = useState([]);
	const [itemList, setItemList] = useState(allItems);

	const {fetchAllItems} = useFetchData();

	useEffect(() => {
		fetchAllItems().then(list => setAllItems(list));
	}, []);

	const filter = e => {
		setItemList(allItems.filter(item => {
			return item.name.toLowerCase().includes(e.target.value.toLowerCase())
		}))
	}

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
						onChange={filter}/>
					<ul className="search-menu__list">
						{itemList
							.map(item => (<li key={item.id} className="search-menu__item">{item.name}</li>))}
					</ul>
				</div>
			</motion.div>
		</>
	)
}


export default SearchInput;