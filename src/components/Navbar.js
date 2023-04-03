import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='bg-sky-400 h-16 flex justify-between items-center px-11 shadow'>
			<Link href='/'>
				<img src='/to-do-list.png' alt='logo' className='w-11 h-11' />
			</Link>
			<div className='flex font-bold'>
				<ul className='flex gap-7 text-2xl text-white'>
					<li>
						<Link href='/'>Dashboard</Link>
					</li>
					<li>
						<Link href='/pages/create'>Create</Link>
					</li>
				</ul>

				<div className=' flex ml-7 bg-white rounded-lg px-2 '>
					<input
						type='text'
						className='w-52 rounded-lg focus:outline-none'
						placeholder='Search...'
					/>
					<img src='search.svg' alt='search' />
				</div>
			</div>
			<Link href='/user'>
				<img src='user.svg' alt='user' />
			</Link>
		</nav>
	);
}
