import React, { useState, useEffect, Fragment } from 'react';
import { NO_OF_USERS_PER_PAGE, URL } from '../constants.js';
import Loading from './Loading.js';
import Users from './Users.js';
import Pagination from './Pagination.js';
import { animateScroll as scroll } from 'react-scroll';

const Container = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userData, setUserData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const getAndSetUsers = async () => {
		setIsLoading(true);
		const res = await fetch(URL);
		const users = await res.json();
		const totalPages = Math.ceil(
			users.results.length / NO_OF_USERS_PER_PAGE,
		);
		setTotalPages(totalPages);
		setIsLoading(false);
		setUserData(users.results);
	};
	useEffect(() => {
		getAndSetUsers();
	}, []);
	const switchPage = (p) => {
		scroll.scrollToTop({ duration: 300 });
		setPage(p);
	};
	const switchToPreviousPage = () => {
		scroll.scrollToTop({ duration: 300 });
		page !== 1 && setPage((p) => p - 1);
	};
	const switchToNextPage = () => {
		scroll.scrollToTop({ duration: 300 });
		page !== totalPages && setPage((p) => p + 1);
	};
	return (
		<div className='container'>
			{isLoading ? (
				<Loading />
			) : (
				<Fragment>
					<Users page={page} userData={userData} />
					<Pagination
						switchPage={switchPage}
						switchToPreviousPage={switchToPreviousPage}
						switchToNextPage={switchToNextPage}
						totalPages={totalPages}
					/>
				</Fragment>
			)}
		</div>
	);
};

export default Container;
