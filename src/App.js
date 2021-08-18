import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import {useState, useEffect} from "react";

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={()=> setVisible(!isVisible)}>Toogle</button>
      {/* <ClassComponent/> */}
      {isVisible && <ClassComponent/>}
      {isVisible ? <FunctionalComponent counter={0}/> : null}
      {/* <FunctionalComponent/> */}
    </div>
  );
}

export default App;
