import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Students from './components/Students';
import Manage from './components/Manage';

function App() {
  return (
    <>
<BrowserRouter>
    <Navigation/>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/students" element={<Students/>} />
    <Route path="/manage" element={<Manage/>} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
