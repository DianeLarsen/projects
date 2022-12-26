import React from 'react';

const Footer = () => {
	return (
		<div id='footer'>
			<div className='margin'>
				<h6>
					Created using <a href='https://reactjs.org/'>React</a> by Katie
					Jablonski
				</h6>
				<h6> Let's connect: </h6>
				<ul className='connect'>
					<li>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/KJablonski08/book-browser'>
							<img
								className='connect-img'
								src='https://emoji.slack-edge.com/T0351JZQ0/github/019359e4f03230a2.png'
								alt='github emoji'
							/>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.linkedin.com/in/katie-jablonski/'>
							<img
								src='https://emoji.slack-edge.com/T0351JZQ0/linkedin/d99de7ac281450d9.png'
								className='connect-img'
								alt='linkedin emoji'
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
