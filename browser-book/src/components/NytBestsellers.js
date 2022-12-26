import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const NytBestsellers = ({ searchObj, setSearchObj, history }) => {
	const [list, setList] = useState(null);
	const [nfList, setnfList] = useState(null);
	useEffect(() => {
		fetch(
			`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setList(res);
			})
			.catch(console.error);
		fetch(
			`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setnfList(res);
			})
			.catch(console.error);
	}, []);
	const handleClick = (bestseller) => {
		setSearchObj({
			...searchObj,
			title: bestseller.title,
			author: bestseller.author,
			isbn: bestseller.primary_isbn13,
		});
		history.push('/books');
	};

	if (!list) {
		return (
			<div className='margin'>
				<p>Book List not Found</p>
			</div>
		);
	}
	if (!nfList) {
		return (
			<div className='margin'>
				<p>Book List not Found</p>
			</div>
		);
	}
	return (
		<div className='margin'>
			<div className='authors'>
				<h4>The New York Times Best Sellers</h4>
				<h2>Best Sellers: Fiction</h2>
				<Carousel>
					{list.results.books.map((bestseller, i) => {
						return (
							<Carousel.Item key={i} onClick={() => handleClick(bestseller)}>
								<span>{bestseller.rank} </span>
								<img
									className='nyt-img'
									src={bestseller.book_image}
									alt='First slide'
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<br />
			<div className='authors'>
				<h4>The New York Times Best Sellers</h4>
				<h2>Best Sellers: Non-Fiction</h2>
				<Carousel>
					{nfList.results.books.map((bestseller, i) => {
						return (
							<Carousel.Item key={i} onClick={() => handleClick(bestseller)}>
								<span>{bestseller.rank} </span>
								<img
									className='nyt-img'
									src={bestseller.book_image}
									alt='First slide'
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default NytBestsellers;
