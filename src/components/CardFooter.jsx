import profileImage from '../assets/image-avatar.webp';

const CardFooter = () => {
	return (
		<footer className='flex items-center gap-x-3'>
			<figure className='w-8 h-8 rounded-full'>
				<img src={profileImage} alt='profile' />
			</figure>
			<h2 className='font-extrabold text-sm'> Greg Hooper </h2>
		</footer>
	);
};

export default CardFooter;
