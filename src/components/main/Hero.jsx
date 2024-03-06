import Slider from "../slider/Slider";

import playBtn from "../../img/hero/playBtn.png";
import StarRating from "../starRating/starRating";

import "./Hero.scss";

const Hero = ({data}) => {
	return(
		<>
			<section className="hero">
				<div className="hero__columns">
					<div className="hero__column left-col">
						<div className="left-col__content">
							<div className="left-col__text">
								<div className="left-col__title">
									<h1>Breath Natureal</h1>
								</div>
								<div className="left-col__p">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div className="left-col__buttons btn">
								<button className="btn__explore explore"><span>Explore</span></button>
								<button className="btn__play">
									<img src={playBtn} alt="play button"/>
									<span>Live Demo...</span>
								</button>
							</div>
						</div>
						<div className="left-col__reviews review">
							<div className="review__item">
								<div className="review__img">
									<img src={data && data.image } alt="profile image"/>
								</div>
								<div className="review__info">
									<div className="review__name">{data && data.name}</div>
									<StarRating/>
								</div>
							</div>
							<div className="review__text"><p>{data && data.text}</p></div>
						</div>
					</div>
					<div className="hero__column right-col">
						<div className="right-col__slider">
							<Slider/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero;