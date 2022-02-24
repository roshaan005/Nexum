
import './App.css';
import {BrowserRouter, Link,Route,Routes,HashRouter} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './views/home';
import Footer from './components/footer';
import Create from './views/Create';
import Join from './views/Join';
import Signup from './views/signup';
import LogIn from './views/logIn';
import SuccessPage from './views/sucessPage';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <>
   
    <HashRouter>
    <Navbar/>
    <Routes>
      <Route  path = '/'element={<Home/>}/>
      <Route  path = '/create' element={<Create/>}/>
      <Route  path = '/join' element={<Join/>}/>
      <Route  path = '/signup'element={<Signup/>}/>
      <Route  path = '/login'element={<LogIn/>}/>
      <Route  path = '/errorPage'element={<ErrorPage/>}/>
      <Route  path = '/successPage'element={<SuccessPage/>}/>


    </Routes>
    <Footer/>   




    

    </HashRouter>
    
    
   
    </>
  );
}

export default App;
