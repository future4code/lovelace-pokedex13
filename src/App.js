import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import PokedexPage from './pages/PokedexPage/PokedexPage'
import DetailPage from './pages/DetailPage/DetailPage'
import HomeHeader from './pages/Home/HomeHeader'
import HeaderPoke from './pages/PokedexPage/HeaderPoke'


function App() {
  return (
    <BrowserRouter>
		<Switch>
			<Route exact path='/'>
				<HomeHeader/>
				<Home />
			</Route>
			<Route exact path='/pokedex'>
				<HeaderPoke />
				<PokedexPage />
			</Route>
			<Route exact path='/detail'>
				
				<DetailPage />
			</Route>
			
		</Switch>
      
    </BrowserRouter>
  )
}

export default App;
