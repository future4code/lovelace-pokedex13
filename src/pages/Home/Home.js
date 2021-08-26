import axios from 'axios'
import {useEffect, useState} from 'react'
import {PokeCard, Image, Button, BtnContainer} from './styled'
import useRequest from '../../hooks/useRequest'
import {useHistory} from 'react-router-dom'
import PokeBall from '../../img/pokeBall.png'
import HomeHeader from './HomeHeader'



const Home = (props)=>{	
	const pokemons = useRequest({}, 'https://pokeapi.co/api/v2/pokemon/')	
	const history = useHistory()		
	

	return <>
			<HomeHeader/>						
			{pokemons.results && pokemons.results.map(poke=>{
				return <PokeCard key={poke.name}>
						   <BtnContainer>						   		
							   <Button onClick={()=> history.push(`detail/${poke.name}`)}>{poke.name}</Button>
							   <Button onClick={()=> props.addToPokedex(poke.url)} >Adicionar à Pokedex</Button>
						   </BtnContainer>
					   </PokeCard>
			})}								
		   </>		  

}
export default Home
