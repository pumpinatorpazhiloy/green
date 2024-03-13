import { useMemo } from "react";

const useFetchData= () => {

	const fetchReviews = useMemo(() => async () => {
		try {
		  const response = await fetch('http://localhost:3001/reviews');
		  const jsonData = await response.json();
		  return jsonData;
		} catch (error) {
		  console.error('Error', error);
		}
	}, []);

	const fetchTopSelling = useMemo(() => async () => {
		try {
			const response = await fetch('http://localhost:3001/top-selling');
			const jsonData = await response.json();
			return jsonData;
		 } catch (error) {
			console.error('Error', error);
		 }	
	},[])
	
	return {
		fetchReviews,
		fetchTopSelling
	}
}

export default useFetchData;