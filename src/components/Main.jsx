import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import PokemonCard from "./PokemonCard.jsx"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

export default function Main() {
	const {
		data: pokemones,
		loading: loadingList,
		error: errorList,
	} = useFetch(`${BASE_URL}?limit=200`) // Cambia el límite según necesites

	const [pokemonDetails, setPokemonDetails] = useState([])
	const [loadingDetails, setLoadingDetails] = useState(true)
	const [errorDetails, setErrorDetails] = useState(null)

	useEffect(() => {
		if (pokemones && pokemones.results) {
			// Función para obtener los detalles de cada Pokémon
			const fetchPokemonDetails = async () => {
				try {
					const details = await Promise.all(
						pokemones.results.map(async (pokemon) => {
							const response = await fetch(pokemon.url)
							if (!response.ok) {
								throw new Error(`Error fetching details for ${pokemon.name}`)
							}
							const data = await response.json()
							return data
						})
					)
					setPokemonDetails(details)
					setLoadingDetails(false)
				} catch (error) {
					setErrorDetails(error)
					setLoadingDetails(false)
				}
			}

			fetchPokemonDetails()
		}
	}, [pokemones])

	if (loadingList || loadingDetails) return <p>Cargando...</p>
	if (errorList)
		return (
			<p>Hubo un error al cargar la lista de Pokémon: {errorList.message}</p>
		)
	if (errorDetails)
		return (
			<p>
				Hubo un error al cargar los detalles de los Pokémon:{" "}
				{errorDetails.message}
			</p>
		)

	return (
		<div
			className={`bg-slate-900/70 w-full mx-auto min-h-[85%] flex justify-center p-4 ${
				!pokemones
					? "flex items-center justify-center"
					: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 capitalize"
			}`}
		>
			{pokemonDetails.map((pokemon, index) => (
				<PokemonCard
					key={index}
					name={pokemon.name}
					hp={pokemon.stats[0].base_stat} // HP
					types={pokemon.types.map((type) => type.type.name)} // Tipos
					dmg={pokemon.stats[1].base_stat} // Ataque
					armor={pokemon.stats[2].base_stat} // Defensa
					weight={pokemon.weight} // Peso
					height={pokemon.height} // Altura
					image={pokemon.sprites.other["official-artwork"].front_default} // Imagen
					imageShiny={pokemon.sprites.other["official-artwork"].front_shiny} // Imagen shiny
				/>
			))}
		</div>
	)
}
