import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './PokemonDetail.css'

export default function PokemonDetail() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPokemon()
    }
  }, [id])

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="Back-Button"
      >
        ← Volver
      </button>

      {loading && <p>Cargando detalles del Pokémon...</p>}
      {error && <p>Error: {error}</p>}

      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} width="200" className="Pokemon-Image"/>
          <p>ID: {pokemon.id}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <div className="Types-Container">
            {pokemon.types.map((typeInfo) => (
              <span key={typeInfo.type.name} className="Type-Badge">
                {typeInfo.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
