import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Category = ({ searchObj, setSearchObj, history }) => {
	const handleAuthorSubmit = (event) => {
		event.preventDefault();
		setSearchObj({ ...searchObj, title: '', author: event.target.textContent });
		history.push('/books');
	};
	return (
		<div className='margin'>
			<div className='authors'>
				<h2>Most Browsed Authors</h2>
				<br />
				<Carousel>
					<Carousel.Item>
						<h3>Mystery - Thriller</h3>
						<Button
							className='carousel-btn'
							variant='dark'
							onClick={handleAuthorSubmit}>
							Agatha Christie
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Stephen King
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							James Patterson
						</Button>
					</Carousel.Item>
					<Carousel.Item>
						<h3>Classics</h3>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							William Shakespeare
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							F. Scott Fitzgerald
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Jane Austen
						</Button>
					</Carousel.Item>
					<Carousel.Item>
						<h3>Childrens</h3>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							J. K. Rowling
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Dr. Seuss
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Roald Dahl
						</Button>
					</Carousel.Item>
					<Carousel.Item>
						<h3>Romance</h3>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Danielle Steel
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Nicholas Sparks
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							Nora Roberts
						</Button>
					</Carousel.Item>
					<Carousel.Item>
						<h3>Fantasy</h3>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							J. R. R. Tolkien
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							C. S. Lewis
						</Button>
						<Button
							onClick={handleAuthorSubmit}
							className='carousel-btn'
							variant='dark'>
							George R.R. Martin
						</Button>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Category;
