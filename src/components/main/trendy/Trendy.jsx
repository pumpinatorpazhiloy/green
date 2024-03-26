import Table from "../../table/Table";

import { motion } from "framer-motion";

import small from "../../../img/table/1.png"
import fresh from "../../../img/table/2.png"

import './Trendy.scss';
const Trendy = () => {
	return(
		<>
			<section className="trendy">
				<div className="container">
					<div className="trendy__content">
						<motion.h2 
							className="trendy__title title-b"
							initial={{y: 50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{duration: .7}}
							viewport={{once: true}}
							>Our Trendy plants</motion.h2>
						<Table 
							src={small} 
							title={'For Small Decs Ai Plat'}
							p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
							price={'Rs. 599/-'}
							clazz={'table'}/>
						<Table 
							src={fresh} 
							title={'For Fresh Decs Ai Plat'}
							p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
							price={'Rs. 579/-'}
							clazz={'table-f'}/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Trendy;