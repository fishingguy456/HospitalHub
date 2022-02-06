import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Hospitals from './Hospitals';
import Users from './Users';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/hospitals" element={<Hospitals />}/>
          <Route path="/users" element={<Users />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
        </div>
    </Router>
  )
}
export default App;
