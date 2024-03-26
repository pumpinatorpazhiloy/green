import logo from "../../img/header/logo.png";

import { motion } from "framer-motion";

import './Footer.scss'

const Footer = () => {
	return(
		<>
			<footer className="footer">
				<div className="container">
					<motion.div 
						className="footer__content"
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						transition={{duration: .9}}
						viewport={{once: true}}>
						<div className="footer__columns">
							<div className="footer__column">
								<div className="footer__logo">
									<div className="footer__img">
										<img src={logo} alt="logo"/>
									</div>
									<div className="footer__planto">Planto.</div>
								</div>
								<div className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
								<div className="footer__social social">
									<div className="social__fb">
										<a href="/">FB</a>
									</div>
									<div className="social__tw">
										<a href="/">TW</a>
									</div>
									<div className="social__li">
										<a href="/">LI</a>
									</div>
								</div>
							</div>
							<div className="footer__column">
								<div className="footer__links links">
									<div className="links__title">Quick Link’s</div>
									<ul>
										<li className="links__item">
											<a href="/" className="links__link">Home</a>
										</li>
										<li className="links__item">
											<a href="/" className="links__link">Type’s Of plant’s</a>
										</li>
										<li className="links__item">
											<a href="/" className="links__link">Contact</a>
										</li>
										<li className="links__item">
											<a href="/" className="links__link">Privacy</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="footer__column">
								<div className="footer__email email">
									<div className="email__title">For Every Update.</div>
									<div className="email__input">
										<input placeholder="Enter Email" type="text" />
										<button type="button"><span>SUBSCRIBE</span></button>
									</div>
									<p className="email__rights">planto © all right reserve</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</footer>
		</>
	)
}

export default Footer;