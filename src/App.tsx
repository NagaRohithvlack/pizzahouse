import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import NavBar from './components/home/navbar/NavBar'
import FoodMenuPage from './components/menu/foodmenu/FoodMenuPage'

function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='menu' element={ <FoodMenuPage /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
