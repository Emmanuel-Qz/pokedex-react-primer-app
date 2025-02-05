import { useState, useEffect } from "react"

const useFetch = (url) => {
	const [data, setData] = useState([]) // Inicializar data como un array vacío
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(url)
				const data = await res.json()
				setData(data)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false) // Asegurarse de que loading se establece en false en caso de error
				console.error(error)
			}
		}
		fetchData()
	}, [url]) // Añadir url como dependencia

	return { data, loading, error } // Devolver los estados
}

export default useFetch
