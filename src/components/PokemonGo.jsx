import { usePokemon } from "../hooks/usePokemon";
import { ContenedorPokemon } from "./ContenedorPokemon";
import { SearchPokemon } from "./SearchPokemon";
export const PokemonGo = ()=>{
    const{handleGetPokemon,pokemons,nombrePokemon} = usePokemon()

    return (
        //fragments
        <> 
        {/*props = propiedad que viaja entre componentes*/}
            <SearchPokemon handleGetPokemon={handleGetPokemon}/>
            <ContenedorPokemon pokemons={pokemons} nombrePokemon={nombrePokemon}/>
        </>
    )
}