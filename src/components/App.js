import React,{useState} from 'react';

import './styles/App.css';

import Timer from './Timer';


const App = () => {

    const [count,setCount] = useState(0);
    console.log(count)
    return (
            <div className="App">
                <h1 className="center-align pad-2">POMODORO TIMER</h1>

                <Timer startMinute={count % 2 == 0 ? 25 :5 } setCount={setCount} count={count} />

            </div>
    
        );
  


};

export default App;
