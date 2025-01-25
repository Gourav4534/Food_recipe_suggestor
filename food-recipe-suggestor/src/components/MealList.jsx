import React, { useState, useEffect } from 'react';
import { searchMealByName } from '../services/mealService';

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Arrabiata');

    useEffect(() => {
        const fetchMeals = async () => {
            const data = await searchMealByName(searchTerm);
            setMeals(data.meals);
        };
        fetchMeals();
    }, [searchTerm]);

    return (
        <div className="container">
            <h1 className="my-4">MealDB React App</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a meal"
                    className="form-control"
                />
            </div>
            <div className="row">
                {meals && meals.map((meal) => (
                    <div key={meal.idMeal} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={`${meal.strMealThumb}/preview`} className="card-img-top" alt={meal.strMeal} />
                            <div className="card-body">
                                <h5 className="card-title">{meal.strMeal}</h5>
                                <p className="card-text">{meal.strInstructions.substring(0, 100)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealList;