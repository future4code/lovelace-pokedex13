import styled from 'styled-components'

const HeaderDiv = styled.header`
	background-image: linear-gradient(to right, yellow, gray);
	display: flex;
	justify-content: space-between;
`

const Header = ()=>{
	return<HeaderDiv>
			<button>Ir para pokedex</button>
			<h1>Lista de Pokemons</h1>
		</HeaderDiv>
}
export default Header
