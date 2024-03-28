import Table from './Table';

import location from "../../img/contactTable/1.svg"
import contact from "../../img/contactTable/2.svg"
import PhoneForm from '../forms/Forms';

import { motion } from 'framer-motion';

import './Contacts.scss';

const Contacts = () => {
	return(
		<>
			<main className="main">
				<div className="container">
					<motion.section 
						className="contacts"
						initial={{y: 50, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{duration: .7}}
						viewport={{once: true}}>
						<div className="contacts__content">
							<h1 className="contacts__title title-b">Contact Us</h1>
							<div className="contacts__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis sunt aperiam perferendis corporis dignissimos nihil magni. Veniam minima maiores fugiat aut sequi saepe esse ab magnam, quos unde atque?</div>
							<form className="contacts__form" action="submit">
								<div className="contacts__item item-contact">
									<input name="text" id="text" placeholder="Type here..." type="email" className="item-contact__input"/>
								</div>
								<div className="contacts__item item-contact">
									<PhoneForm/>
								</div>
								<button className="contacts__btn" type="submit"><span>Contact Me</span></button>
							</form>
						</div>
						<div className="contacts__tables">
							<Table title="Our Location" img={location} p="Aboba st. 54"/>
							<Table title="Contact Us" img={contact} p="+ 380 (000) 000 00"/>
						</div>
					</motion.section>
				</div>
			</main>
		</>
	)
}

export default Contacts;