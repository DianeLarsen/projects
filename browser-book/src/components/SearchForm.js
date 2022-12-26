import React, { useState } from 'react';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

const SearchForm = ({ searchObj, setSearchObj }) => {
	const initialState = {
		title: '',
		author: '',
		isbn: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchObj(formState);
		setFormState(initialState);
	};
	return (
		<div>
			<Form inline className='searchForm' onSubmit={handleSubmit}>
				<InputGroup>
					<FormControl
						onChange={handleChange}
						placeholder='Search by Title'
						id='title'
						aria-label='title'
						aria-describedby='basic-addon2'
						value={formState.title}
					/>
				</InputGroup>
				<InputGroup>
					<FormControl
						onChange={handleChange}
						placeholder='Search by Author'
						id='author'
						aria-label='author'
						aria-describedby='basic-addon2'
						value={formState.author}
					/>
				</InputGroup>
				<InputGroup>
					<FormControl
						onChange={handleChange}
						placeholder='Search by ISBN'
						id='isbn'
						aria-label='isbn'
						aria-describedby='basic-addon2'
						value={formState.isbn}
					/>
				</InputGroup>
				<Button type='submit' variant='dark'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default SearchForm;
