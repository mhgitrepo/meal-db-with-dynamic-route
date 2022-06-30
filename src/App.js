import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import MealDetail from './components/MealDetail/MealDetail';
import NotFound from './components/NotFound/NotFound';
import MealSearch from './components/MealSearch/MealSearch';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/meals' element={<Meals/>}>
          <Route path=':mealId' element={<MealDetail/>}/>
        </Route>
        <Route path='mealsearch' element={<MealSearch/>}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
