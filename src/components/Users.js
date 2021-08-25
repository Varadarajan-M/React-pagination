import React, { useMemo } from 'react';
import { NO_OF_USERS_PER_PAGE } from '../constants';
import User from './User';
const Users = ({ userData, page }) => {
	const startIndex = useMemo(() => (page - 1) * NO_OF_USERS_PER_PAGE, [page]);
	const data = useMemo(
		() => userData.slice(startIndex, startIndex + NO_OF_USERS_PER_PAGE),
		[userData, startIndex],
	);
	return (
		<div>
			<p className='info'>
				Showing {startIndex + 1} to {startIndex + NO_OF_USERS_PER_PAGE}{' '}
				of {userData.length}
			</p>
			{data.map((u) => (
				<User
					key={u.name.first}
					name={u.name}
					email={u.email}
					phone={u.phone}
					picture={u.picture}
				/>
			))}
		</div>
	);
};

export default Users;
