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
					<Link to='/fruits'>
						<DropDownItem>Fruits</DropDownItem>
					</Link>
				<DropDownItem>Aboba</DropDownItem>
				<DropDownItem>Glek</DropDownItem>
			</div>
		</>
	)
}

export default DropDownNest;