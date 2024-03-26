import cart from "../../img/header/cart.png";
import { motion } from "framer-motion";

import "./Table.scss";

const Table = ({src, title, p, price, clazz}) => {
	return(
		<>	
			<motion.div 
				className={clazz}
				initial={{y: 50, opacity: 0}}
				whileInView={{y: 0, opacity: 1}}
				transition={{duration: .7}}
				viewport={{once: true}}>
				<div className={`${clazz}__content`}>
					<div className={`${clazz}__image`}>
						<img src={src} alt="flower image"/>
					</div>
					<div className={`${clazz}__text`}>
						<h3 className="table__title">{title}</h3>
						<p className="table__p">{p}</p>
						<p className="table__price">{price}</p>
						<div className="table__btns">
							<button className="table__btn_explore explore">
								<span>Explore</span>
							</button>
							<button className="table__btn_buy">
								<img src={cart} alt="cart"/>
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Table;