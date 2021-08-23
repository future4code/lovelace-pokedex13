import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import PokedexPage from './pages/PokedexPage/PokedexPage'
import DetailPage from './pages/DetailPage/DetailPage'
import Header from './components/Header/Header'


function App() {
  return (
    <BrowserRouter>
		<Switch>
			<Route exact path='/'>
				<Header/>
				<Home />
			</Route>
			<Route exact path='/pokedex'>
				<Header/>
				<PokedexPage />
			</Route>
			<Route exact path='/detail'>
				<Header/>
				<DetailPage />
			</Route>
			
		</Switch>
      
    </BrowserRouter>
  )
}

export default App;
