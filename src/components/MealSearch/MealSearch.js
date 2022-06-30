import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './MealSearch.css';

const MealSearch = () => {
    const [searchText, setSearchText] = useState('');

    const [meals, setMeals] = useState([]);

    useEffect( () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(data => setMeals(data.data.meals))
    }, [searchText])

    const searchMeal = e => {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <h2>Find Your Meal</h2>
            <input onChange={searchMeal} type="text" name="" id=""/>
            <div>
                <h3>Result Found: {meals.length}</h3>
                <div className='card-container'>
                    {
                       meals.map(meal => <Meal 
                        key={meal.idMeal}
                        meal = {meal}
                       ></Meal>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MealSearch;