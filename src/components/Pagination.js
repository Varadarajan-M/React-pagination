import React, { useMemo } from 'react';
import Button from './Button';

const Pagination = ({
	switchPage,
	switchToNextPage,
	switchToPreviousPage,
	totalPages,
}) => {
	const totalButtonsArr = useMemo(() => [...Array(totalPages)], [totalPages]);
	return (
		<div className='buttons'>
			<Button onClick={switchToPreviousPage} text='Prev' />
			{totalButtonsArr.map((_, index) => {
				return (
					<Button
						onClick={() => switchPage(index + 1)}
						text={index + 1}
					/>
				);
			})}
			<Button onClick={switchToNextPage} text='Next' />
		</div>
	);
};

export default Pagination;
