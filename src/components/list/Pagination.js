import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import ArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowCircleLeft';
import ArrowRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import './Pagination.css';

const Pagination = (props) => {
	const { page, totalPages, handlePaginationClick } = props;
	return (
		<div className="Pagination">
			<button className="button" onClick={() => handlePaginationClick('prev')} disabled={page <= 1}>
				<FontAwesomeIcon className="Pagination-button" icon={ArrowLeft} />
			</button>
			<span className="Pagination-info">page <span className="Bold">{page}</span> of <span className="Bold">{totalPages}</span></span>
			<button className="button" onClick={() => handlePaginationClick('next')} disabled={page >= totalPages}>
				<FontAwesomeIcon className="Pagination-button" icon={ArrowRight} />
			</button>
		</div>
	)
}

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	handlePaginationClick: PropTypes.func.isRequired,
}

export default Pagination;