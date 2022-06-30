import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
// import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(data => setMeals(data.data.meals))
    }, [])

    return (
        <div>
            <h2>Total meal: {meals.length}</h2>
            <div className ='meal-card-container'>
                {/* {
                    meals.map(meal => <Meal
                        key = {meal.idMeal}
                        meal = {meal}
                    />)
                } */}
                {
                    meals.map(meal => <CustomLink className='meal-card-link'
                        to = {`/meals/${meal.idMeal}`}
                        key = {meal.idMeal}
                    >{meal.strMeal + ", "}</CustomLink>)
                }
                <Outlet/>
            </div>
        </div>
    );
};

export default Meals;