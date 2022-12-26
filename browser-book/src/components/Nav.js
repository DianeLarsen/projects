import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = () => {
	return (
		<div className='nav'>
			<Navbar>
				<Link to='/'>
					<Navbar.Brand href='#home' className='margin white'>
						Book Browser
					</Navbar.Brand>
				</Link>
				<Nav className='mr-auto'></Nav>
			</Navbar>
		</div>
	);
};

export default nav;
