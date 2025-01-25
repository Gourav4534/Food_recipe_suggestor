import React from 'react';
import MealList from './components/MealList';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
    return (
        <div className="App">
            <MealList />
            <Chatbot />
        </div>
    );
}

export default App;