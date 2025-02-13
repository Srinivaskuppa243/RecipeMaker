import SearchBar from './components/SearchBar'
import { Route, Routes } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SearchBar/>}/>
      <Route path='/recipe/:id' element={<RecipeDetails/>}/>
    </Routes>
  )
}

export default App
