import playBtn from "../../img/hero/playBtn.png";

import "./Hero.scss";

const Hero = (data) => {
	return(
		<>
			<section className="hero">
				<div className="hero__columns">
					<div className="hero__column left-col">
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
						<div className="left-col__reviews review">
							<div className="review__item">
								<div className="review__img">
									<img src={'image'} alt="profile image"/>
								</div>
								<div className="review__name">{data && data[0] && data[0].name}</div>
								<div className="review__stars">{}</div>
							</div>
							<div className="review__text"><p>{}</p></div>
						</div>
					</div>
					<div className="hero__column right-col"></div>
				</div>
			</section>
		</>
	)
}

export default Hero;