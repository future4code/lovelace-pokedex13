import axios from 'axios'
import {useEffect, useState} from 'react'
import PokeCard from '../../components/PokeCard'
import {useHistory} from 'react-router-dom'
 import HomeHeader from './HomeHeader'



const Home = (props)=>{
	const pokemons = props.pokemons
	const history = useHistory()	

	useEffect(()=>{
		props.getPokemons()
	}, [])
	

	return <>
			<HomeHeader/>												
			{pokemons && pokemons.map(poke=>{								
				return <PokeCard key={poke.name}
						poke={poke}
						pokeUrl={poke.url}
						pokeName={poke.name}
						addToPokedex={props.addToPokedex} />						
			})}								
		   </>		  

}
export default Home
