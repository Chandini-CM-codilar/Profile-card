import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Profile from './profile';
import Pagination from './slide';


function App() {
  const [state,setstate]=useState(1);
  return (
    <div className="mainapp">
      <Profile state={state}/>
      <Pagination setstate={setstate} state={state}/>
      </div>
  );
}

export default App;
