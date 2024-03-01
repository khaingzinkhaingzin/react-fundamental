import './App.css';
import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />

      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>

      <Greet name="Diania" heroName="Wonder woman">
        <p>This is children props.</p>
      </Greet>
    </div>
  );
}

export default App;
