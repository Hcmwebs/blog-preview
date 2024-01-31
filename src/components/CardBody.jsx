const CardBody = () => {
	return (
		<div className='grid text-start gap-y-3'>
			<div className='badge badge-accent rounded font-extrabold text-xs'>
				Learning
			</div>
			<small className='font-medium text-xs'>Published on 21 Dec 2023</small>
			<h1 className='font-extrabold text-xl text-primary hover:text-accent cursor-pointer'>
				HTML & CSS foundations
			</h1>
			<p className='font-medium text-sm text-neutral'>
				These languages are the backbone of every website, defining structure,
				content, and presentation.
			</p>
		</div>
	);
};

export default CardBody;
