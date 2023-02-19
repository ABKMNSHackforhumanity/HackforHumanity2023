import './App.css';
import Leadmap from './map.js'
import Search from './search.jsx'


function App() {
  return (
    <div className="App">
      <p></p>
      <div>
          <form action="http://localhost:3000/" method="get">
            <input type="text" id="adrs" placeholder= "Street Address..." name="adrssearch"/>
            <input type="text" id="city" placeholder= "City..." name="citysearch"/>
            <input type="submit" value="Submit"></input>
          </form>
            
      </div>
      <p></p>
      <div> 
          <Search></Search>
      </div>
      <Leadmap></Leadmap>
    </div>
  );
}

export default App;
