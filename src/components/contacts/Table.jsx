import './Table.scss'

const Table = ({img, title, p}) => {
	return(
		<>
			<div className="contacts__table table-contact">
				<div className="table-contact__wrapper">
					<div className="table-contact__img">
						<img src={img} alt="icon"/>
					</div>
					<div className="table-contact__text">
						<div className="table-contact__title">{title}</div>
						<div className="table-contact__p">{p}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Table;