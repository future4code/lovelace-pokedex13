import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home/Home'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import DetailPage from '../pages/DetailPage/DetailPage'
import {useState} from 'react'


const Routes = (props)=>{
	const pokemons = props.pokemons
	const getPokemons = props.getPokemons
	const rmFromPokedex = props.rmFromPokedex

	const [pokedex, setPokedex] = useState([])

	
  return (
    <BrowserRouter>
		<Switch>
			<Route exact path='/'>				
				<Home addToPokedex={props.addToPokedex} pokemons={pokemons}
				getPokemons={getPokemons} />
			</Route>
			<Route exact path='/pokedex'>
				<PokedexPage pokeData={props.pokeData} pokemons={pokemons}
				removePoke={props.removePoke} />
			</Route>
			<Route exact path='/detail/:name'>				
				<DetailPage />
			</Route>
			<Route>
				<h1 style={{textAlign:'center'}}>Página não encontrada</h1>
			</Route>			
		</Switch>
      
    </BrowserRouter>
  )
}

export default Routes