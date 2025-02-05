export default function Header() {
	return (
		<div className='w-full h-auto py-2 px-4 bg-red-800 text-center flex justify-between items-center flex-col sm:flex-row text-white'>
			<h1 className='py-2 font-bold mb-2 sm:ml-8 sm:mb-1 sm:py-2 uppercase text-2xl sm:text-6xl hover:text-amber-300 transition ease-in-out duration-300  hover:scale-110'>
				Pokedex
			</h1>
			<nav className='sm:mr-8'>
				<ul className='flex justify-between items-center flex-col gap-4 sm:flex-row text-xl'>
					<li className='mx-2 hover:text-amber-300 transition ease-in-out duration-300 hover:scale-110'>
						<a href='#'>Home</a>
					</li>
					<li className='mx-2 hover:text-amber-300 transition ease-in-out duration-300 hover:scale-110'>
						<a href='#'>Pokémon</a>
					</li>
					<li className='mx-2 hover:text-amber-300 transition ease-in-out duration-300 hover:scale-110'>
						<a href='#'>About</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
