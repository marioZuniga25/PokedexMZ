import axios from 'axios'
import { useEffect, useState } from 'react'
import './Tabla.css';
import { useNavigate } from 'react-router-dom';

export const Tabla = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedPokemonId, setSelectedPokemonId] = useState(null)
    const [PokeInfo, setPokeInfo] = useState(null)
    const navigate = useNavigate()





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




    const handleCardClick = async (pokenum) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokenum}`)
            setPokeInfo(response.data)
            setSelectedPokemonId(pokenum)
        } catch (err) {
            console.error('Error fetching Pokémon detail:', err)
            setError(err.message)
        }
    }

    return (
        <>
            {selectedPokemonId && (
                <div className="Poke-ModalOverlay" onClick={() => setSelectedPokemonId(null)} />
            )}
            <div className="Poke-Container">
                {loading && <p>Cargando Pokémon...</p>}
                {error && <p>Error: {error}</p>}
                {!loading && !error && (
                    pokemon.map((item, index) => {
                        const pokenum = index + 1
                        const isSelected = selectedPokemonId === pokenum
                        return (
                            <div
                                className={`Poke-Card${isSelected ? ' Poke-Card--selected' : ''}`}
                                key={item.name}
                                onClick={() => handleCardClick(pokenum)}
                            >
                                <p className="Poke-Name">{item.name}</p>
                                <div className="back-box">
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={item.name} width="150" />
                                </div>
                                <p className="Poke-Title">
                                    {isSelected && PokeInfo ? PokeInfo.types.map((typeInfo) => typeInfo.type.name).join(', ') : "------"}
                                </p>
                                <div className="back-box-Desc">
                                    {isSelected && PokeInfo ? (
                                        <>
                                            <p className="Poke-Desc">
                                                Altura: {PokeInfo.height} <br />
                                                Peso: {PokeInfo.weight} <br />
                                                Habilidades: {PokeInfo.abilities.map((ability) => ability.ability.name).join(', ')} <br />
                                                Ataques: {PokeInfo.moves.slice(0, 5).map((moveInfo) => moveInfo.move.name).join(', ')} <br />
                                            </p>
                                        </>
                                    ) : (
                                        <p className="Poke-Desc">--------------------------------------</p>
                                    )}
                                </div>

                            </div>
                        )
                    }
                    )
                )}
            </div>
        </>
    )
}
