
import './App.css';
import {BrowserRouter, Link,Route,Routes,HashRouter} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './views/home';
import Footer from './components/footer';
import Create from './views/Create';
import Join from './views/Join';
import Signup from './views/signup';

function App() {
  return (
    <>
   
    <HashRouter>
    <Navbar/>
    <Routes>
      <Route  path = '/'element={<Home/>}/>
      <Route  path = '/create' element={<Create/>}/>
      <Route  path = '/join' element={<Join/>}/>
      <Route  path = '/login'element={<Signup/>}/>


    </Routes>
    <Footer/>   




    

    </HashRouter>
    
    
   
    </>
  );
}

export default App;
