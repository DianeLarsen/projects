import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Category from './Category';
import NytBestsellers from './NytBestsellers';

const Home = ({ searchObj, setSearchObj, history }) => {
	return (
		<div>
			<br />
			<div fluid className='margin jumbotron'>
				<Container>
					<h1>Welcome to Book Browser. </h1>
					<p>
						From here, you'll be able to navigate through the entire library of
						<span style={{ color: 'blue' }}> G</span>
						<span style={{ color: 'red' }}>o</span>
						<span style={{ color: 'goldenrod' }}>o</span>
						<span style={{ color: 'blue' }}>g</span>
						<span style={{ color: 'green' }}>l</span>
						<span style={{ color: 'red' }}>e </span>
						Books.
					</p>
					<p>
						Looking for suggestions? Click on any option below to see more about
						a book or author.
					</p>
					<p>
						You my also click the search button to search for a specific book:
					</p>
					<Link to='/books'>
						<Button variant='dark'>Search</Button>
					</Link>
				</Container>
			</div>
			<NytBestsellers
				searchObj={searchObj}
				setSearchObj={setSearchObj}
				history={history}
			/>
			<br />
			<Category
				searchObj={searchObj}
				setSearchObj={setSearchObj}
				history={history}
			/>
			<br />
		</div>
	);
};

export default Home;
