import React from 'react';

const UserImage = ({ src }) => {
	return (
		<div>
			<img className='user-image' src={src} alt='User' />
		</div>
	);
};

export default UserImage;
