import { CardHeader, CardBody, CardFooter } from '../components';

const Card = () => {
	return (
		<main className='mx-auto grid place-items-center min-h-screen'>
			<div className='card w-[327px] lg:w-full max-w-96 bg-secondary shadow-[8px_8px_0px_0px_hsl(0,0%,7%)] rounded-[20px] border-[1px] border-black gap-y-6 p-6 items-start'>
				<CardHeader />
				<CardBody />
				<CardFooter />
			</div>
		</main>
	);
};

export default Card;
