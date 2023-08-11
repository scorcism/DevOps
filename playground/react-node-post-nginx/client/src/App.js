import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainComponent from './MainComponent';
import OtherPage from './OtherPage';


function App() {
  return (
    <div className="App">
      <header>
        <header className="header">
          <div>This is a multicontainer application</div>
          <Link to="/">Home</Link> 
          <br/>
          <br/>
          <br/>
          <Link to="/otherpage">Other page</Link>
        </header>
      </header>
      <div classname="main">

      <Routes>
        <Route exact path="/" element={<MainComponent />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
