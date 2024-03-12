import { useState, useEffect } from "react";
import useFetchData from "../../hooks/fetchData";

import Hero from "./hero/Hero";
import Trendy from "./trendy/Trendy";
import TopSelling from "./top-selling/TopSelling";

import './Main.scss'

const Main = () => {

	const [data, setData] = useState([])

	const {fetchReviews} = useFetchData();

	const getRandomData = () => {
		if (data.length === 0) {
		  return null;
		}
		const randomIndex = Math.floor(Math.random() * data.length); 
		return data[randomIndex];
	};

	const getReview = async () => {
		const data = await fetchReviews();
		setData(data);
	}

	useEffect(() => {
		getReview();
	}, []);

	return(
		<>
			<main className="main">
				<div className="container">
					<div className="main__content">
						<Hero data={getRandomData()}/>
						<Trendy/>
						<TopSelling/>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;