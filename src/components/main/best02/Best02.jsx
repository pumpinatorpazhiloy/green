import Slider2 from '../../slider2/Slider2'; 
import { motion } from 'framer-motion';

import './Best02.scss';

const Best02 = () => {
	return(
		<>
			<section className="best02">
				<div className="container">
					<div className="best02__content">
						<motion.h2 
							className="best02__title title-b"
							initial={{y: 50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{duration: .7}}
							viewport={{once: true}}>Our Best o2</motion.h2>
						<motion.div
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							transition={{duration: .9}}
							viewport={{once: true}}
							>
							<Slider2/>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Best02;