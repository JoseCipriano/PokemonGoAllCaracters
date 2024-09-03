export const ContenedorPokemon = ({pokemons,nombrePokemon}) =>{
   
    
   return(
        
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-1 g-lg-4 mt-2">
            
            <text-aling/>

            <h1>{nombrePokemon}</h1>
          
            <img  className="m-5 w-25" src={pokemons.url} alt="image"  />
            </div>
           
            <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Peso</th>
                <th scope="col">Altura</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                <th scope="row">Informacion</th>
                <td><p> {pokemons.peso / 10 + "kg"}  </p></td>
                <td><p> {pokemons.altura / 10 + "m"}  </p></td>
                </tr>
                
                    
                </tbody>
                </table>

        </>

        

  )
}
