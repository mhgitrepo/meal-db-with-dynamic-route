import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        /* const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals)) */
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(data => setMeals(data.data.meals))
    }, [])

    return (
        <div>
            <h2>Total meal: {meals.length}</h2>
            <div className ='meal-card-container'>
                {
                    meals.map(meal => <Meal
                        key = {meal.idMeal}
                        meal = {meal}
                    />)
                }
            </div>
        </div>
    );
};

export default Meals;