import logo from "./logo.svg";
import "./App.css";
import Modules from "./Components/modules";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>JavaScript ES6 Modules</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-modules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <Modules />
      </header>
    </div>
  );
}

export default App;
