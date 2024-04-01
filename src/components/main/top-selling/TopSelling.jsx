import { useState, useEffect } from 'react';
import useFetchData from '../../../hooks/fetchData';

import { motion } from 'framer-motion';
import cart from "../../../img/header/cart.png"

import { serverData } from '../../../../server/db';

import './TopSelling.scss'

const TopSelling = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		setData(serverData[1].topSelling);
	}, []);

	const renderItems = () => {
		const items = data.map((item, i) => {
			return(
				<motion.li 
					className="top-selling__item selling-item"
					initial={{y: 50, opacity: 0}}
					whileInView={{y: 0, opacity: 1}}
					transition={{duration: .4 * i}}
					viewport={{once: true}}
					key={item.id}
					>
					<div className="selling-item__wrapper">
						<a href="/">
							<div className="selling-item__image">
								<img src={`${item.image}`} alt="top selling item"/>
							</div>
							<div className="selling-item__text">
								<h3 className="selling-item__title">{item.name}</h3>
								<p className="selling-item__p">{item.text}</p>
								<div className="selling-item__row">
									<p className="selling-item__price">{item.price}</p>
									<button className="selling-item__btn"type="button">
										<img src={cart} alt="cart"/>
									</button>
								</div>
							</div>
						</a>
					</div>
				</motion.li>
			)
		})
		return items;
	}
	
	return(
		<>
			<section className="top-selling">
				<div className="container">
					<div className="top-selling__content">
						<motion.h2 
							className="top-selling__title title-b"
							initial={{y: 50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{duration: .7}}
							viewport={{once: true}}>Our Top Selling</motion.h2>
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