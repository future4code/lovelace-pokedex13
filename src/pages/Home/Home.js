import axios from 'axios'
import {useEffect, useState} from 'react'
import {PokeCard, Image, Button} from './styled'
import useRequest from '../../hooks/useRequest'
import {useHistory} from 'react-router-dom'
import PokeBall from '../../img/pokeBall.png'


const Home = ()=>{
	const pokemons = useRequest({}, 'https://pokeapi.co/api/v2/pokemon/')	
	const history = useHistory()
	
	return <>
			{pokemons.results && pokemons.results.map(poke=>{
				return <PokeCard key={poke.name}>
						<Image src={`${PokeBall}`} />							
						<Button onClick={()=> history.push(`detail/${poke.name}`)}>{poke.name}</Button>
					   </PokeCard>
			})}								
		   </>
}
export default Home
