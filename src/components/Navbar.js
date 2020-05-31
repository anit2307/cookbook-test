import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import {RecipeContext} from '../context';
import NavbarItems from './NavbarItems';

export default class Navbar extends Component {
    static contextType = RecipeContext;
    
render() {
    let {recipes} = this.context;
    recipes = recipes.map(recipe => {
        return <NavbarItems key={recipe.id} recipe={recipe}/>;
    });

    return (
        <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">
            <Link to="/">
                <img src={logo} alt="Cookbook Recipe" />
            </Link>
        </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {recipes}
              </ul>
        </div>
        </nav>
        )
    }
}

