const StarRating = () => {
	return (
	  <ul className="review__stars">
		 {[...Array(5)].map((item, i) => {
			return (<li key={i}><span className="star">&#9733;</span></li>);
		 })}
	  </ul>
	);
};

export default StarRating;