import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import {useEffect, useState} from 'react'
import {PokeCard} from './styled'


const Home = ()=>{
	const [pokemons, setPokemons] = useState([])

	useEffect(()=>{
		axios.get(`${BASE_URL}`).then(res=>{
			setPokemons(res.data.results)
		}).catch(err=>{
			alert('Algo deu errado')
		})
	}, [])

	return<>
			{pokemons && pokemons.map(pokemon=>{
				return<PokeCard>
						{pokemon.url}
					</PokeCard>
			})}			
		</>
}
export default Home
