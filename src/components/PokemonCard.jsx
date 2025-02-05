import PropTypes from "prop-types"
import { useState } from "react"

// Mapeo de tipos de Pokémon a colores de fondo
const typeColors = {
	electric: "bg-yellow-300",
	normal: "bg-gray-400",
	fire: "bg-red-500",
	water: "bg-blue-500",
	grass: "bg-green-500",
	ice: "bg-cyan-300",
	fighting: "bg-red-700",
	poison: "bg-purple-500",
	ground: "bg-yellow-700",
	flying: "bg-indigo-300",
	psychic: "bg-pink-500",
	bug: "bg-lime-500",
	rock: "bg-yellow-800",
	ghost: "bg-indigo-700",
	dragon: "bg-purple-700",
	dark: "bg-gray-800",
	steel: "bg-gray-500",
	fairy: "bg-pink-300",
}

export default function PokemonCard({
	name,
	hp,
	types,
	dmg,
	armor,
	weight,
	height,
	image,
	imageShiny,
}) {
	const [isShiny, setIsShiny] = useState(false)

	const handleShiny = () => {
		setIsShiny(!isShiny)
	}

	return (
		<div className='w-full max-w-sm mx-auto rounded-2xl p-4 bg-gradient-to-r from-slate-50 to-slate-200 my-6 text-black shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-[730px]'>
			<div className='bg-blue-300 w-full rounded-t-2xl py-3'>
				<div className='flex justify-between px-4 items-center text-white text-xl md:text-2xl font-bold'>
					<h1
						className='hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 hover:text-amber-300'
						onClick={handleShiny}
					>
						{name}
					</h1>
					<h2>HP: {hp}</h2>
				</div>

				<div className='flex justify-between px-4 items-center text-black text-lg md:text-xl font-bold mt-2'>
					{types.map((type, index) => (
						<span
							key={index}
							className={`type ${type.toLowerCase()} ${
								typeColors[type.toLowerCase()] || "bg-gray-400"
							} px-3 py-1 rounded-full text-white`}
						>
							{type}
						</span>
					))}
				</div>
			</div>

			<div className='image my-3'>
				<img
					src={isShiny ? imageShiny : image}
					alt={name}
					className='w-full h-auto drop-shadow-xl overflow-hidden object-contain hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'
					loading='lazy'
					onClick={handleShiny}
				/>
			</div>

			<div className='stats grid grid-cols-2 md:grid-cols-2 gap-3 text-center text-lg font-bold'>
				<div className='bg-gray-200 p-2 rounded-lg'>
					<h3>Attack</h3>
					<p>{dmg}</p>
				</div>
				<div className='bg-gray-200 p-2 rounded-lg'>
					<h3>Defense</h3>
					<p>{armor}</p>
				</div>
				<div className='bg-gray-200 p-2 rounded-lg'>
					<h3>Weight</h3>
					<p>{weight}</p>
				</div>
				<div className='bg-gray-200 p-2 rounded-lg'>
					<h3>Height</h3>
					<p>{height}</p>
				</div>
			</div>
		</div>
	)
}

PokemonCard.propTypes = {
	name: PropTypes.string.isRequired,
	hp: PropTypes.number.isRequired,
	types: PropTypes.arrayOf(PropTypes.string).isRequired,
	dmg: PropTypes.number.isRequired,
	armor: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	imageShiny: PropTypes.string,
}
