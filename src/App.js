import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import HornedBeast from './HornedBeast';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi im Carl
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
