import { useState } from 'react';
import InputMask from 'react-input-mask';

const PhoneForm = () => {

	const [phone, setPhone] = useState(null);

	return(
		<>
			<InputMask 
				value={phone} 
				onChange={e => setPhone(e.target.value)} 
				mask="+380 (099) 999 99 99" 
				maskChar="_"
				className="item-contact__input"
				placeholder="Phone number..."
				/>
		</>
	)
}

export default PhoneForm;