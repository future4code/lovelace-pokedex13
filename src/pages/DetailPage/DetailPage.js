import {useParams} from 'react-router-dom'
import useRequest from '../../hooks/useRequest'
import DetailHeader from './DetailHeader'
import {Back, Front, Images, Power, Container, Text} from './styled'
import PokeBall from '../../img/pokeBall.png'


const DetailPage = ()=>{
	const params = useParams()
	const pokemon = useRequest({}, `https://pokeapi.co/api/v2/pokemon/${params.name}`)
	

	return<>
			<DetailHeader pokemon={pokemon}/>
			<Container>				
				<Images>
					{pokemon.sprites && <Front src={pokemon.sprites.front_default} />}				
					{pokemon.sprites && <Back src={pokemon.sprites.back_default} />}			 
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
