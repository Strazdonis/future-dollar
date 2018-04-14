import React from 'react';
import PropTypes from 'prop-types';
import { renderChangePercent } from '../../helpers';
import { Link } from 'react-router-dom';
import './Table.css';

const Table = (props) => {
	const { currencies } = props;
	return (
			<div className="container">
				<ul className="responsive-table"> 
					<li className="Table-head Bold">
							<div className="col col-1">#</div>
							<div className="col col-2">Name</div>
							<div className="col col-3">Market Cap</div>
							<div className="col col-4">Price</div>
							<div className="col col-5">24H</div>
					</li>
						{currencies.map((currency) => (
							<Link key={currency.id} to={`/currency/${currency.id}`}>
							<li className="table-row">
								<div className="col col-1" data-label="Rank">
									<span className="Bold">{currency.rank}</span>
								</div>
								<div className="col col-2" data-label="Name">
									<span className="Crypto-name Bold Highlight">{currency.name}</span>
								</div>
								<div className="col col-3" data-label="Market Cap">
									<span className="Bold">$ {currency.marketCap}</span>
								</div>
								<div className="col col-4" data-label="Price">
									<span className="Bold Highlight">$ {currency.price}</span>
								</div>
								<div className="col col-5" data-label="24H Change">
									{renderChangePercent(currency.percentChange24h)}
								</div>
							</li>
							</Link>
						))}
				</ul>
			</div>

		)
}

Table.propTypes = {
	currencies: PropTypes.array.isRequired,
};

export default Table;