import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='bg-sky-400'>
			<img src='/to-do-list.png' alt='logo' />
			<div>
				<ul>
					<li>
						<Link href='/'>Dashboard</Link>
					</li>
					<li>
						<Link href='/'>Create</Link>
					</li>
				</ul>
				<input type='text' />
			</div>
		</nav>
	);
}
