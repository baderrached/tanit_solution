

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';



function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
