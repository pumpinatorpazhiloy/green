const StarRating = () => {
	return (
	  <ul className="review__stars">
		 {[...Array(5)].map(index => {
			index += 1;
			return (<li key={index}><span className="star">&#9733;</span></li>);
		 })}
	  </ul>
	);
};

export default StarRating;