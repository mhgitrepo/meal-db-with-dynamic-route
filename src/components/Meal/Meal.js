import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css';

const Meal = ({meal}) => {
    const navigate = useNavigate();
    const showMealDetail = () => {
        navigate(`/meal/${meal.idMeal}`);
    }

    return (
        <div>
            <div className='single-meal-card'>
                <img className='single-meal-img' src={meal.strMealThumb} alt="" />
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions.slice(0, 100)}</p>
                <button onClick={showMealDetail}>View Detail: {meal.idMeal}</button>
            </div>
        </div>
    );
};

export default Meal;