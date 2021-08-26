import HeaderPoke from './HeaderPoke'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'


const PokedexPage = (props)=>{
	const pokemons = props.pokedex
	const item = []
	const instead = useRef(null)

	const fillPokedex = ()=>{
		if(pokemons.length > 0){
			for(let c = 0; c < pokemons.length; c++){
				axios(pokemons[c]).then(res=>{
					item.push(res.data)
					console.log(item[0].name)					
				})
			}
		}else{
			instead.current.innerHTML = 'Sua Pokedex está vazia'
		}
	}

	useEffect(()=>{
		fillPokedex()
	}, [])

	

	return<>		
			<HeaderPoke/>
			<h1 ref={instead} style={{textAlign:'center'}}></h1>			
			{item && item.map(pokemon=>{
				return <p>{pokemon.name}</p>

			})}
		  </>
}
export default PokedexPage
