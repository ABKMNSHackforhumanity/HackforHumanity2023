import Search from './search.jsx'
import './App.css';
import Leadmap from './map.js'

function App() {
  return (
    <div className="App">
      <p></p>
      <Search title="Street Address..."></Search> 
      <Search title="City..."></Search>
      <p></p>
      <Leadmap></Leadmap>
    </div>
  );
}

export default App;
