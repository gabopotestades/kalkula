
import './App.scss';
import Navbar from './GeneralComponents/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './GeneralComponents/Home/Home';
import FiniteStateMachines from './FiniteStateMachines/FiniteStateMachines';

function App() {
  return (

    <Router>

      <div className="App">

        <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/finite-state-machines' element={<FiniteStateMachines/>} />
        </Routes>

      </div>

    </Router>

  );
}

export default App;
