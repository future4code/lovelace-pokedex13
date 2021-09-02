import Context from './Context'
import {useState} from 'react'
import axios from 'axios'



const GlobalState = (props)=>{
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


const states = {pokemons, pokeData}
const setters = {removePoke, setPokeData}
const requests = {getPokemons, addToPokedex}


	return (
		<Context.Provider value={{states, setters, requests}}>
			{props.children}
		</Context.Provider>
	)
}
export default GlobalState