import cart from "../../img/header/cart.png";

import "./Table.scss";

const Table = ({src, title, p, price, clazz}) => {
	return(
		<>	
			<div className={clazz}>
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
			</div>
		</>
	)
}

export default Table;