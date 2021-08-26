import styled from 'styled-components'
import PokeBall from '../img/pokeBall.png'
import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'


export const Picture = styled.img`
    margin-top: 15vh;
    margin-left: 4vw;
    width: 10vw;
`
export const Card = styled.div`
    background-image: url(${PokeBall});
    display: inline-grid;
    border-radius: 100vh;
    width: 20vw;
    height: 40vh;
    margin: 20px;
`
export const BtnAdd = styled.button`    
    border-radius: 30px;
    position: relative;
    top: 40vh;
    left: 3vw;
    height: 5.5vh;
    width: 8vw;
    cursor: pointer;                
`
export const BtnName = styled.button`    
    border-radius: 30px;
    position: relative;
    top: 40vh;    
    height: 5.5vh;
    width: 8vw;
    cursor: pointer;                
`
export const BtnContainer = styled.div`
    position: absolute;
    display: flex;
    
`

const PokeCard = (props)=>{
    const history = useHistory()
    const [images, setImages] = useState([])
    //const images = []

    useEffect(()=>{
        axios.get(props.pokeUrl).then(res=>{
            setImages(res.data.sprites.front_default)
            console.log(res.data.sprites.front_default)
            console.log(images)            
        })
    }, [])

    return<Card>
            <Picture src={images} />
           <BtnContainer>                               
               <BtnName onClick={()=> history.push(`detail/${props.pokeName}`)}>{props.pokeName}</BtnName>
               <BtnAdd onClick={()=> props.addToPokedex(props.pokeUrl)} >Adicionar à Pokedex</BtnAdd>
           </BtnContainer>
          </Card>         
}
export default PokeCard