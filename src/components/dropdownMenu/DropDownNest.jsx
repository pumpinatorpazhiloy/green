import { Link } from 'react-router-dom';

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
				<Link to='/flowers'>
					<DropDownItem>Flowers</DropDownItem>
				</Link>
				<DropDownItem>Fruits</DropDownItem>
				<DropDownItem>Aboba</DropDownItem>
				<DropDownItem>Glek</DropDownItem>
			</div>
		</>
	)
}

export default DropDownNest;