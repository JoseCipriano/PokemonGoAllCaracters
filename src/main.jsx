import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { PokemonGo } from './components/PokemonGo'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokemonGo/>
    </React.StrictMode>
)