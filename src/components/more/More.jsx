import { motion } from 'framer-motion';

import './More.scss'

const More = () => {
	return(
		<main className="main">
			<div className="container">
				<section className="more">
					<div className="more__content">
						<div className="more__text">
							<motion.h1 
								className="more__title title-b"
								initial={{y: 50, opacity: 0}}
								whileInView={{y: 0, opacity: 1}}
								transition={{duration: .7}}
								viewport={{once: true}}><span>More</span> About Us</motion.h1>
							<motion.div 
								className="more__textWrapper"
								initial={{y: 50, opacity: 0}}
								whileInView={{y: 0, opacity: 1}}
								transition={{duration: 1}}
								viewport={{once: true}}>
								<p className="more__main">Planto is an online store where you can buy indoor and outdoor plants, as well as everything you need to care for them. We offer a wide variety of flowers, trees, shrubs, vegetables, fruits, and other types of plants.</p>
								<p className="more__label">Our mission:</p>
								<ul className="more__mission">
									<li>To make plants accessible to everyone.</li>
									<li>To help people create a beautiful and cozy home and garden.</li>
									<li>To share our knowledge and love of plants.</li>
								</ul>
								<p className="more__label">Our team:</p>
								<ul className="more__team">
									<li>We are a team of professionals who are passionate about plants.</li>
									<li>We have extensive experience in the field of gardening and floriculture.</li>
									<li>We are always ready to help you choose the plants that are right for you.</li>
								</ul>
							</motion.div>
							<motion.h2 
								className="more__whyUs title-b"
								initial={{y: 50, opacity: 0}}
								whileInView={{y: 0, opacity: 1}}
								transition={{duration: .7}}
								viewport={{once: true}}><span>Why</span> Choose Us</motion.h2>
							<div className="more__textWrapper">
								<p className="more__label">Why us:</p>
								<ul className="more__whyUs_list">
									<li>We offer only high-quality plants from trusted suppliers.</li>
									<li>We guarantee that your plants will be delivered to you safe and sound.</li>
									<li>We are always ready to help you with the selection of plants and their care.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default More;