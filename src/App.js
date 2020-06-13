import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
return <div>
            <body text = "white">
            <head><title>React App</title></head>
            <h1 className="heading"><u>BASIC REACT APP</u></h1>
            <hr/>
            <h2><strong>Hello From Sherjeel Ahmed</strong></h2>
            name = {name} 
            <br/>age = {age -8}
            <br/> <Hello></Hello>
            </body>
        </div>
}

export default App;
