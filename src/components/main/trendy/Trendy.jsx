import Table from "../../table/Table";

import small from "../../../img/table/1.png"
import fresh from "../../../img/table/2.png"

import './Trendy.scss';
const Trendy = () => {
	return(
		<>
			<section className="trendy">
				<div className="container">
					<div className="trendy__content">
						<h2 className="trendy__title title-b">Our Trendy plants</h2>
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