import './App.scss'
import Schedule from '../components/Schedule';
import { Days, Hours } from '../components';


function App() {

  

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <Hours/>
        </div>
        <div className="bottom">
          <Days/>
          <div className="times">
            <Schedule/>
            <Schedule/>
            <Schedule/>
            <Schedule/>
            <Schedule/>
            <Schedule/>
            <Schedule/>
          </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default App
