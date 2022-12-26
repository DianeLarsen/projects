import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookDetail = ({ match }) => {
	const [book, setBook] = useState(null);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=isbn:${match.params.book}&key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBook(res.items[0]);
			})
			.catch(console.error);
	}, [match.params.book]);
	if (book === null) {
		return (
			<div className='margin'>
				<br />
				<div className='d-flex justify-content-center'>
					<Spinner animation='border' variant='primary' />
				</div>
				<div>
					<h6>Loading... Please Wait</h6>
					<p>
						If your book does not load in a few seconds - please navigate back
						to home and try your search again
					</p>
					<Link to={'/'}>
						<Button variant='dark'>Home</Button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div>
			<br />
			<p className='d-flex justify-content-center'>
				Click book for text preview
			</p>
			<Card className='book-box card-cascade-narrower detail'>
				{book.volumeInfo.previewLink && book.volumeInfo.imageLinks && (
					<a
						target='_blank'
						rel='noreferrer'
						href={book.volumeInfo.previewLink}>
						<Card.Img
							className='book-image'
							src={book.volumeInfo.imageLinks.thumbnail}
						/>
					</a>
				)}
				<Card.Title>{book.volumeInfo.title}</Card.Title>
				{book.volumeInfo.authors &&
					book.volumeInfo.authors.map((author, i) => {
						return (
							<Card.Subtitle key={i} className='mb-2 text-muted'>
								{author}
							</Card.Subtitle>
						);
					})}
				{book.volumeInfo.categories && (
					<Card.Subtitle variant='secondary' size='sm'>
						{book.volumeInfo.categories[0]}
					</Card.Subtitle>
				)}
				<hr />
				{book.volumeInfo.description && (
					<Card.Text>{book.volumeInfo.description}</Card.Text>
				)}
				{book.volumeInfo.publisher && (
					<Card.Text variant='secondary' size='sm'>
						Publisher: {book.volumeInfo.publisher}
					</Card.Text>
				)}
				{book.volumeInfo.publishedDate && (
					<Card.Text variant='secondary' size='sm'>
						Published Date: {book.volumeInfo.publishedDate}
					</Card.Text>
				)}
				<Card.Text variant='secondary' size='sm'>
					Page Count: {book.volumeInfo.pageCount}
				</Card.Text>
				<hr />
				{book.volumeInfo.infoLink && (
					<a
						target='_blank'
						rel='noreferrer'
						href={book.volumeInfo.infoLink}
						className='d-flex justify-content-center'>
						<Button variant='light'>Purchase Now</Button>
					</a>
				)}
				<br />
			</Card>
			<br />
			<div className='d-flex justify-content-center'>
				<Link to={'/books'}>
					<Button variant='dark'>BookList</Button>
				</Link>
			</div>
		</div>
	);
};

export default BookDetail;
