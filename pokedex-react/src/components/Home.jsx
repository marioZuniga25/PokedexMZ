import '../App.css'
import { Filtros } from './Filtros'
import { Tabla } from './Tabla'

export default function Home() {
  return (
    <main className="App">
      <img
        src="https://imgs.search.brave.com/Eyg6RzFkGl_JtYZz-VLD-qunkEsUBoX9PgGc0YNas3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ29teXdheS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDUvcG9rZW1v/bi1sb2dvLXBuZy5w/bmc"
        alt="Pokedex Hero"
        style={{ width: '40%', height: 'auto', alignSelf: 'center' }}
      />
      <Filtros />
      <Tabla />
    </main>
  )
}
