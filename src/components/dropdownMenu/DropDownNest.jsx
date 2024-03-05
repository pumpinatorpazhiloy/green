import './DropDowns.scss';

const DropDownNest = () => {

	const DropDownItem = ({children}) => {
		return (
			<a href="#" className="dropdown__link">{children}</a>
		)
	}

	return (
		<>
			<div className="dropdown">
				<DropDownItem>Flowers</DropDownItem>
				<DropDownItem>Fruits</DropDownItem>
				<DropDownItem>Aboba</DropDownItem>
				<DropDownItem>Glek</DropDownItem>
			</div>
		</>
	)
}

export default DropDownNest;