import Routes from './Routes/Routes'
import GlobalState from './global/GlobalState'
import {useState} from 'react'
import axios from 'axios'


const App = ()=>{
	const [pokemons, setPokemons] = useState([])
	const [pokeData, setPokeData] = useState([])
	
		

	const getPokemons = ()=>{
		axios.get('https://pokeapi.co/api/v2/pokemon/')
		.then(res=>{			
			setPokemons(res.data.results)			
		}).catch(err=>{
			alert('Deu merda!')
		})
	}

	const addToPokedex = (pokemon)=>{
		axios.get(pokemon).then(res=>{
			const newLIst = [...pokeData, res.data]		
			setPokeData(newLIst)
			removePoke(res.data.name)
		})		
	}

		
	const removePoke = (pokemon)=>{
		const newList = pokemons && pokemons.filter(poke=>{
			return poke.name !== pokemon			
		})		
		setPokemons(newList)						
	}

	return<GlobalState>
		<Routes  pokemons={pokemons} getPokemons={getPokemons}
		addToPokedex={addToPokedex} pokeData={pokeData}
		removePoke={removePoke} />
		</GlobalState>
}
export default App