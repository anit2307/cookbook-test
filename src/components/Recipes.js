import React, { Component } from 'react';
import { RecipeContext } from '../context';
import Title from '../components/Title';
import RecipeItems from './RecipeItems';

export default class Recipes extends Component {
static contextType = RecipeContext

    render() {
    let {recipes} = this.context;
    recipes = recipes.map(recipe => {
        return <RecipeItems key={recipe.id} recipe={recipe} />;
    });

    return (
        <section className="recipes">
            <Title title="Recipes" />
            <div className="recipes-center">
                {recipes}
            </div>
        </section>
    )
  }
}
