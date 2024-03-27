import { useState, useEffect } from "react";
import useFetchData from "../../hooks/fetchData";

import "./SearchInput.scss"

const SearchInput = () => {

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

	return(
		<>
			<div className="menu__search search-menu">
				<div className="search-menu__content">
					<input 
						type="text" 
						placeholder="Search"
						onChange={filter}/>
					<ul className="search-menu__list">
						{itemList
							.map(item => (<li key={item.id} className="search-menu__item">{item.name}</li>))}
					</ul>
				</div>
			</div>
		</>
	)
}


export default SearchInput;