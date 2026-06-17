import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Tabla } from './components/Tabla'
import { Filtros } from './components/Filtros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src="https://imgs.search.brave.com/Eyg6RzFkGl_JtYZz-VLD-qunkEsUBoX9PgGc0YNas3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ29teXdheS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDUvcG9rZW1v/bi1sb2dvLXBuZy5w/bmc" alt="" style={{ width: '40%', height: 'auto', alignSelf: 'center'  }}   />
        <Filtros></Filtros>
        <Tabla></Tabla>
    </>
  )
}

export default App
