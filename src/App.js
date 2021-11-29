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


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/home">
          <Home/>
        </Route>
       
        <Route path="/project">
        <Project></Project>
        </Route>
        
        <Route path="/contact">
        <Contact></Contact>
        </Route>
      </Switch>
    </BrowserRouter>
     
    
    </div>
  );
}

export default App;
