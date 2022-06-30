import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetail.css';

const MealDetail = () => {
    const{mealId} = useParams();
    const [meal, setMeal] = useState({});

    useEffect( () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(data => setMeal(data.data.meals[0]))
    }, [mealId])

    return (
        <div className='single-meal-card-detail-container'>
            <div className='single-meal-card-detail'>
                <h2 className='single-meal-card-detail-header-text'>Single Meal Detail: {meal.idMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal?.toLowerCase()} />
                <p><small>Food origin: {meal.strArea}</small></p>
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetail;