import { useState, useEffect } from "react";
import useFetchData from "../../hooks/fetchData";
import { motion } from "framer-motion";

import cart from "../../img/header/cart.png"

import {serverData} from "../../../server/db.js";

import "./Flowers.scss"

const Flowers = () => {

	const [data, setData] = useState([])

	const renderItems = () => {
		const items = data.map((item, i) => {
			return(
				<motion.li 
					className="flowers__item flowers-item"
					initial={{y: 50, opacity: 0}}
					whileInView={{y: 0, opacity: 1}}
					transition={{duration: .4 * i}}
					viewport={{once: true}}
					key={item.id}>
					<div className="flowers-item__wrapper">
						<a href="/">
							<div className="flowers-item__image">
								<img src={`${item.image}`} alt="top selling item"/>
							</div>
							<div className="flowers-item__text">
								<h3 className="flowers-item__title">{item.name}</h3>
								<p className="flowers-item__p">{item.text}</p>
								<div className="flowers-item__row">
									<p className="flowers-item__price">{item.price}</p>
									<button className="flowers-item__btn"type="button">
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

	useEffect(() => {
		setData(serverData[3].flowers);
	}, []);

	return(
		<>
			<main className='main'>
				<div className="container">
					<section className="flowers">
						<div className="flowers__content">
							<div className="flowers__items">
								<ul className="flowers__list">
									{renderItems()}
								</ul>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}

export default Flowers;