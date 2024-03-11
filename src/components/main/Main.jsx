import { useState, useEffect, useMemo } from "react";

import Hero from "./hero/Hero";
import Trendy from "./trendy/Trendy";
import TopSelling from "./top-selling/TopSelling";

const Main = () => {

	const [data, setData] = useState([])

	const fetchData = useMemo(() => async () => {
		try {
		  const response = await fetch('http://localhost:3001/reviews');
		  const jsonData = await response.json();
		  setData(jsonData)
		} catch (error) {
		  console.error('Error', error);
		}
	}, []);

	const getRandomData = () => {
		if (data.length === 0) {
		  return null;
		}
		const randomIndex = Math.floor(Math.random() * data.length); 
		return data[randomIndex];
	};

	useEffect(() => {
		fetchData();
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