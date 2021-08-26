import {useParams} from 'react-router-dom'
import DetailHeader from './DetailHeader'
import {Figure, Images, Power, Container, Text} from './styled'
import axios from 'axios'
import {useState, useEffect} from 'react'

const DetailPage = ()=>{
	const params = useParams()
	const [pokemon, setPokemon] = useState([])

	useEffect(()=>{
		axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
		.then(res=>{
			console.log(res.data)
			setPokemon(res.data)
		})	
	}, [])



	return<>
			<DetailHeader pokemon={pokemon}/>			
			<Container>				
				<Images>
					{pokemon.sprites && <Figure src={pokemon.sprites.front_default} />}				
					{pokemon.sprites && <Figure src={pokemon.sprites.back_default} />}			 
		  		</Images>
		  		<Power>
					<h3 style={{textAlign:'center'}}>Poderes</h3>
					<Text>
						<p><b>hp:</b></p>
						<p><b>attack:</b></p>
						<p><b>defense:</b></p>
						<p><b>special-attack:</b></p>
						<p><b>special-defense:</b></p>
						<p><b>speed:</b></p>
					</Text>
				</Power>
		  	</Container>
		  </>			
}
export default DetailPage
