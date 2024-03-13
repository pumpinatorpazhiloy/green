import { useState, useEffect } from 'react';
import useFetchData from '../../../hooks/fetchData';

import cart from "../../../img/header/cart.png"

import './TopSelling.scss'
const TopSelling = () => {

	const [data, setData] = useState([])

	const {fetchTopSelling} = useFetchData();

	const getTopSelling = async () => {
		const data = await fetchTopSelling();
		setData(data);
	}

	const renderItems = () => {
		const items = data.map(item => {
			return(
				<li className="top-selling_item selling-item">
					<div className="selling-item__wrapper">
						<a href="/">
							<div className="selling-item__image">
								<img src={`${item.image}`} alt="top selling item"/>
							</div>
							<div className="selling-item__text">
								<h3 className="selling-item__title">{item.name}</h3>
								<p className="selling-item__p">{item.text}</p>
								<div className="selling-item__row">
									<div className="selling-item__price">{item.price}</div>
									<button className="selling-item__btn"type="button">
										<img src={cart} alt="cart"/>
									</button>
								</div>
							</div>
						</a>
					</div>
				</li>
			)
		})
		return items;
	}

	useEffect(() => {
		console.log(data);
		getTopSelling();
	}, []);

	return(
		<>
			<section className="top-selling">
				<div className="container">
					<div className="top-selling__content">
						<h2 className="top-selling__title title-b">Our Top Selling</h2>
						<div className="top-selling__items">
							<ul className="top-selling__list">
								{renderItems()}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default TopSelling;