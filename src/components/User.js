import React from 'react';
import UserImage from './UserImage';

const User = ({ name, email, phone, picture }) => {
	return (
		<div className='user'>
			<div className='user-details'>
				<h3>
					Name : {name.first} {name.last}
				</h3>
				<h4>Email : {email}</h4>
				<h5>Phone : {phone}</h5>
			</div>
			<UserImage src={picture.large} />
		</div>
	);
};

export default User;
