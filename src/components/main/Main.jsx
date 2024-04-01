import { useState, useEffect } from "react";
import useFetchData from "../../hooks/fetchData";

import Hero from "./hero/Hero";
import Trendy from "./trendy/Trendy";
import TopSelling from "./top-selling/TopSelling";
import CustomerReview from "./customer-review/CustomerReview";
import Best02 from "./best02/Best02";

import {serverData} from "../../../server/db.js"

import './Main.scss'

const Main = () => {

	const [data, setData] = useState([])

	const getRandomData = () => {
		if (data.length === 0) {
		  return null;
		}
		const randomIndex = Math.floor(Math.random() * data.length); 
		return data[randomIndex];
	};

	useEffect(() => {
		setData(serverData[0].reviews)
	}, []);

	return(
		<>
			<main className="main">
				<div className="container">
					<div className="main__content">
						<Hero data={getRandomData()}/>
						<Trendy/>
						<TopSelling/>
						<CustomerReview data={getRandomData()}/>
						<Best02/>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;