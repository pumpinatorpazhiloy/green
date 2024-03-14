import StarRating from "../../starRating/StarRating";

import './CustomerReview.scss';

const CustomerReview = ({data}) => {
	return(
		<>
			<section className="customer-review">
				<div className="container">
					<div className="customer-review__content">
						<h2 className="customer-review__title title-b">Customer Review</h2>
						<div className="customer-review__review review-customer">
								<div className="review-customer__item">
									<div className="review-customer__wrapper">
										<div className="review-customer__content">
											<div className="review-customer__img">
												<img src={data && data.image } alt="profile image"/>
											</div>
											<div className="review-customer__info">
												<div className="review-customer__name">{data && data.name}</div>
												<span className="review-customer__stars">
													<StarRating/>
												</span>
											</div>
										</div>
										<div className="review-customer__text"><p>{data && data.text}</p></div>
									</div>
								</div>
								<div className="review-customer__item">
									<div className="review-customer__wrapper">
										<div className="review-customer__content">
											<div className="review-customer__img">
												<img src={data && data.image } alt="profile image"/>
											</div>
											<div className="review-customer__info">
												<div className="review-customer__name">{data && data.name}</div>
												<span className="review-customer__stars">
													<StarRating/>
												</span>
											</div>
										</div>
										<div className="review-customer__text"><p>{data && data.text}</p></div>
									</div>
								</div>
								<div className="review-customer__item">
									<div className="review-customer__wrapper">
										<div className="review-customer__content">
											<div className="review-customer__img">
												<img src={data && data.image } alt="profile image"/>
											</div>
											<div className="review-customer__info">
												<div className="review-customer__name">{data && data.name}</div>
												<span className="review-customer__stars">
													<StarRating/>
												</span>
											</div>
										</div>
										<div className="review-customer__text"><p>{data && data.text}</p></div>
									</div>
								</div>
							</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default CustomerReview;