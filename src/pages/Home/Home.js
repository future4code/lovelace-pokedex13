import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import PokeCard from '../../components/PokeCard'
import {useHistory} from 'react-router-dom'
import HomeHeader from './HomeHeader'
import Context from '../../global/Context.js'



const Home = (props)=>{
	const {states, setters, requests} = useContext(Context)
	const history = useHistory()	

	useEffect(()=>{
		requests.getPokemons()
	}, [])
	

	return <>
			<HomeHeader/>												
			{states.pokemons && states.pokemons.map(poke=>{								
				return <PokeCard key={poke.name}
						poke={poke}
						pokeUrl={poke.url}
						pokeName={poke.name}
						addToPokedex={props.addToPokedex} />						
			})}								
		   </>		  

}
export default Home
