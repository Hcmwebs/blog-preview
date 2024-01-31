import HeaderImage from '../assets/illustration-article.svg';

const CardHeader = () => {
	return (
		<header>
			<figure>
				<img
					src={HeaderImage}
					alt='a photo of the card blog preview'
					className='rounded-[10px]'
				/>
			</figure>
		</header>
	);
};

export default CardHeader;
