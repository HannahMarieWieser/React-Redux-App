import React from 'react';
import './App.css';
import {createStore} from 'Redux'
import MissionList from './components/MissionList'
import {reducer} from './reducers'

// function reducer(){
//   return(
//     data: 'data'
//   )
// }

const store = createStore(reducer)


function App() {
  return (
    <div className="App">
      <MissionList/>
    </div>
  );
}

export default App;
