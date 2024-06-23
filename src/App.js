// App.js

import './App.css';
import TypeSpeed from './components/TypeSpeed';

function App() {
  return (
    
    <div className="App">
      <h1 className="center-heading">Typing Speed Tester</h1>
      <TypeSpeed />
      <h3 className="center-heading">Start typing to start the timer</h3>
    </div>
  );
}

export default App;
