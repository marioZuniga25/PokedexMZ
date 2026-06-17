import axios from 'axios'
import { useEffect, useState } from 'react'
import './Tabla.css';

export const Tabla = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0');

                setPokemon(response.data.results)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [])

    return (
        <>
            <div className="Poke-Container">
                {loading && <p>Cargando Pokémon...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    pokemon.map((item, index) => (
                        <div className="Poke-Card" key={item.name}>

                            <p className="Poke-Name">{item.name}</p>
                            <div className="back-box">
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={item.name} width="150" />
                            </div>
                            <p className="Poke-Title">------</p>
                            <div className="back-box-Desc">
                                
                                <p className="Poke-Desc">-------------------------------
                                </p>
                            </div>

                        </div>
                    ))
                )}
            </div>
        </>
    )
}
