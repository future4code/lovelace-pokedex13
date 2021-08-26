import axios from 'axios'
import {useEffect, useState} from 'react'
//import {PokeCard, Image, Button, BtnContainer} from './styled'
import PokeCard from '../../components/PokeCard'
import {useHistory} from 'react-router-dom'
import PokeBall from '../../img/pokeBall.png'
import HomeHeader from './HomeHeader'



const Home = (props)=>{
	const pokemons = props.pokemons
	const history = useHistory()

	useEffect(()=>{
		props.getPokemons()
	})
	

	return <>
			<HomeHeader/>									
			{pokemons.results && pokemons.results.map(poke=>{								
				return <PokeCard key={poke.name}
						pokeUrl={poke.url}
						pokeName={poke.name}
						addToPokedex={props.addToPokedex} />						
			})}								
		   </>		  

}
export default Home
