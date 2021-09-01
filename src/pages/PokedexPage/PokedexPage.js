import HeaderPoke from './HeaderPoke'
import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PokeBall from '../../img/pokeBall.png'
import {useHistory} from 'react-router-dom'


const Card = styled.div`
    background-image: url(${PokeBall});
    display: inline-grid;
    border-radius: 100vh;
    width: 25vw;
    height: 47.8vh;
    margin: 20px;
`
const Image = styled.img`
	margin-top: 20vh;
	margin-left: 9vw;
`
const BtnRm = styled.button`    
    border-radius: 30px;
    position: relative;
    top: 40vh;
    left: 3vw;
    height: 5.5vh;
    width: 8vw;
    cursor: pointer;                
`
const BtnName = styled.button`    
    border-radius: 30px;
    position: relative;
    top: 40vh;    
    height: 5.5vh;
    width: 8vw;
    cursor: pointer;                
`
const BtnContainer = styled.div`    
    display: flex;
    margin-top: -45vh;
    margin-left 3.5vw;

`

//Inicio do componente funcional
const PokedexPage = (props)=>{
	const [pokeData, setPokeData] = useState(props.pokeData)
	const history = useHistory()
	console.log(pokeData)

	const removePokedex = (name)=>{
		const newPedexList = pokeData && pokeData.filter(poke=>{
			return poke.name !== name
		})
		setPokeData(newPedexList)
	}

return<>		
		<HeaderPoke/>												
			{pokeData.length > 0 ? pokeData.map(data=>{
				return<Card> <Image src={data.sprites.front_default}/>
					  	<BtnContainer>					  		                               
			               <BtnName onClick={()=> history.push(`detail/${data.name}`)}>{data.name}</BtnName>
			               <BtnRm onClick={()=> removePokedex(data.name)}>Remover</BtnRm>
			           </BtnContainer>
					  </Card>
			}) : <h1 style={{textAlign:'center'}}>
			Sua Pokedex está vazia.</h1> }
	  </>
}
export default PokedexPage
