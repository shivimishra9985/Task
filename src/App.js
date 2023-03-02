import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Component/Home';
import Search from './Component/Search';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
   <Route exact path='/' element={<Home/>}></Route>
   <Route exact path='search' element={<Search/>}></Route>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
