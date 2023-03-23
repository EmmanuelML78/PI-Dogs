import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail"
import CreateDog from "./Components/Form/CreateDog"
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Landing} />  
        <Route exact path="/home" component={Home } />
        <Route exact path="/details/:id" component={Detail } />
        <Route exact path="/createDog" component={CreateDog} />
    </div>
  );
}

export default App;
