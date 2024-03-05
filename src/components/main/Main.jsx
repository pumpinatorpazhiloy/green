import { useState, useEffect, useMemo } from "react";

import Hero from "./Hero";
import Trendy from "./Trendy";

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

	useEffect(() => {
		fetchData();
	}, []);

	console.log(data)
	 
	return(
		<>
			<main className="main">
				<div className="container">
					<div className="main__content">
						<Hero data={data}/>
						<Trendy/>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;