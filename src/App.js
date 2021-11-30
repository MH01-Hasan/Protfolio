import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import {
  BrowserRouter,
  Switch,
  Route,
 
  
} from "react-router-dom";
import Home from './component/Home/Home';
import Project from './component/Project/Project';
import About from './component/About/About';
import Details from './component/Details/Details';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/">
          <Home/>
      </Route>

        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/project">
        <Project></Project>
        </Route>
        
        <Route path="/contact">
        <Contact></Contact>
        </Route>

        <Route path="/about">
        <About></About>
        </Route>

        <Route path="/details/:id">
       <Details></Details>
        </Route>
      </Switch>
    </BrowserRouter>
     
    
    </div>
  );
}

export default App;
