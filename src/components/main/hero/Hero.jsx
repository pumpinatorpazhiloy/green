import Slider from "../../slider/Slider";
import { motion } from "framer-motion";

import playBtn from "../../../img/hero/playBtn.png";
import StarRating from "../../starRating/starRating";

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
									<motion.h1
										initial={{x: -100, opacity: 0}}
										animate={{x: 0, opacity: 1}}
										transition={{duration: .3}}
										>Breath Natureal</motion.h1>
								</div>
								<motion.div 
									className="left-col__p" 
									initial={{x: -100, opacity: 0}}
									animate={{x: 0, opacity: 1}}
									transition={{duration: .5}}>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</motion.div>
							</div>
							<motion.div 
								className="left-col__buttons btn"
								initial={{x: -100, opacity: 0}}
								animate={{x: 0, opacity: 1}}
								transition={{duration: .7}}>
								<button className="btn__explore explore"><span>Explore</span></button>
								<button className="btn__play">
									<img src={playBtn} alt="play button"/>
									<span>Live Demo...</span>
								</button>
							</motion.div>
						</div>
						<motion.div 
							className="left-col__reviews review"
							initial={{x: -100, opacity: 0}}
							animate={{x: 0, opacity: 1}}
							transition={{duration: .9}}>
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
						</motion.div>
					</div>
					<motion.div 
						className="hero__column right-col"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: .9}}>
						<div className="right-col__slider">
							<Slider/>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	)
}

export default Hero;