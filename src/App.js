import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import ButterBastedSteak from './recipes/ButterBastedSteak';
// import GarlicRoastChicken from './recipes/GarlicRoastChicken';
// import InstantPotCollardGreens from './recipes/InstantPotCollardGreens';
// import MisoGlazedTurnips from './recipes/MisoGlazedTurnips';
// import SaltAndVinegarRosti from './recipes/SaltAndVinegarRosti';
import Error from './pages/Error';
import Recipes from './pages/Recipes';
import RecipesPage from './pages/RecipesPage';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/recipes/" component={ Recipes } />
    <Route exact path="/recipes/:slug" component={ RecipesPage } />
    <Route component={Error} />
    </Switch>
    </div>

    );
  }
  
  export default App;
  