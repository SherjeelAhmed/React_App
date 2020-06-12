import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
return <div>Hello World from App.js <hr/> 
            name = {name} 
            <br/>age = {age -10}
            <br/> <Hello></Hello>
        </div>
}

export default App;
