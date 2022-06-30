import React from 'react';
import './Meal.css';

const Meal = ({meal}) => {
    return (
        <div>
            <div className='single-meal-card'>
                <img className='single-meal-img' src={meal.strMealThumb} alt="" />
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>
    );
};

export default Meal;