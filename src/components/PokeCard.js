import styled from 'styled-components'
import PokeBall from '../img/pokeBall.png'
import {useHistory} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Context from '../global/Context'


export const Picture = styled.img`
    margin-top: 20vh;
    margin-left: 8vw;
    width: 10vw;
`
export const Card = styled.div`
    background-image: url(${PokeBall});
    display: inline-grid;
    border-radius: 100vh;
    width: 25vw;
    height: 47.8vh;
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
    display: flex;
    margin-top: -45vh;
    margin-left 3.5vw;

`

const PokeCard = (props)=>{
    const {states, setters, requests} = useContext(Context)
    const history = useHistory()
    const [images, setImages] = useState([])
    
    useEffect(()=>{
        axios.get(props.pokeUrl).then(res=>{
            setImages(res.data.sprites.front_default)                        
        })
    }, [])
    return<Card>
            <Picture src={images} />
           <BtnContainer>                               
               <BtnName onClick={()=> history.push(`detail/${props.pokeName}`)}>{props.pokeName}</BtnName>
               <BtnAdd onClick={()=> requests.addToPokedex(props.pokeUrl)} >Adicionar à Pokedex</BtnAdd>
           </BtnContainer>
          </Card>         
}
export default PokeCard