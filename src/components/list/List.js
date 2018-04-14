import React from 'react'; //react engine

import { handleResponse } from '../../helpers.js'; //useful modules
import { API_URL } from '../../config'; //URL base
import Loading from '../common/Loading'; //pre-loader/loading animation
import Table from './Table';	//table itself
import Pagination from './Pagination';	//pagination module

class List extends React.Component {
	constructor() {
		super(); //makes this variable work
		this.state = { //idfk basically session for the app
			loading: false,
			currencies: [],
			error: null,
			totalPages: 0,
			page: 1,
	};

	this.handlePaginationClick = this.handlePaginationClick.bind(this); //allows handlePaginationClick function to access "this" variables
}

componentDidMount() { //basically on page load()
	this.fetchCurrencies(); //run function
}

fetchCurrencies() { //function to fetch currencies from api
	this.setState({ loading: true });
	const {page} = this.state; //constant (not changing) variable with current page
	fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`) // get data from api
    .then(handleResponse) // do after getting the data(run a function)
    .then((data) => { // do after getting the data & running the function, bind variable data as a response from the fetch
    	const {currencies, totalPages} = data;
    	this.setState({ 
    		currencies, //basically currencies : currencies, but sexier
    		totalPages,	//basically totalPages : totalPages, but sexier
    		loading: false,
    	});
    })
    .catch((error) => { //if the api returned an error show it
      	this.setState({
	      	error: error.errorMessage, //get the actual error and bind it to the state
	      	loading: false,
      	});
    });
}




handlePaginationClick(direction) { //what to do when user clicks the pagination buton?!?!?!?

	let nextPage = this.state.page; //get the page variable from state
	nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1; //increment next page if "next" otherwise decrement
	this.setState({page: nextPage}, () => { 
		this.fetchCurrencies(); //after clicking the page and going to another actual page, re-fetch currencies with a new page variable
	});
}

render() {
		const { loading, error, currencies, page, totalPages } = this.state; //use "loading" instead of this.state.loading
		// render only loading component, if loading state is true
		if (loading) {
			return <div className="loading-container"><Loading /></div> //show loading-circle if the loading state is set to true
		}
		// render only error component, if error message is set
		if (this.state.error) {
			return <div className="error">{error}</div> //show error
		}

		return ( //no errors, not loading, show the table
		<div>
			<Table
			currencies={currencies} //{fetched currencies}, variable passed to "Table" module, then the talbe module renders the data
			renderChangePercent={this.renderChangePercent} //function from "renderChangePercent" module, calculates if the percent is >0 and adds a style to it accordingly
			/>

			<Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/> 
	
		</div>

		//pagination module ^^^^^^^^^^^^, {variables} to show the data correctly
		);
	}
}

export default List; //make this exportable so other pages can access all the content