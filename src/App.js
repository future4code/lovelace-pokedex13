import Routes from './Routes/Routes'
import GlobalState from './global/GlobalState'
import {useState} from 'react'
import axios from 'axios'


const App = ()=>{
	const [pokemons, setPokemons] = useState([])

	const getPokemons = ()=>{
		axios.get('https://pokeapi.co/api/v2/pokemon/')
		.then(res=>{			
			setPokemons(res.data)
		}).catch(err=>{
			alert('Deu merda!')
		})
	}

		
	const rmFromPokedex = (pokemon)=>{
		console.log(pokemon)
		const newArrayPokedex = pokemons && pokemons.filter(pokedexItem=>{
			return pokedexItem.url !== pokemon
		})
			const newPokeList = [...pokemons, newArrayPokedex]
			setPokemons(newPokeList)		
	}

	return<GlobalState>
		<Routes  pokemons={pokemons} getPokemons={getPokemons}
		rmFromPokedex={rmFromPokedex} />
		</GlobalState>
}
export default App