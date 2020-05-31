import React, { Component } from 'react';
import items from './data';

const RecipeContext = React.createContext();

export default class RecipeProvider extends Component {
state = {
    recipes: []
};

componentDidMount(){
    let recipes = this.formatData(items);
    this.setState({ recipes });
}

formatData(items){
    let tempItems = items.map(item =>{
        let id = item.sys.id;

        let recipe = { ...item.fields, id };
        return recipe;
    });
    return tempItems;
}


getRecipe = (slug) =>{
    let tempRecipes = [...this.state.recipes];
    const recipe = tempRecipes.find(recipe => recipe.slug === slug); 
    return recipe;
}

  render() {
     return (
        <RecipeContext.Provider value={{ ...this.state, getRecipe: this.getRecipe }}>
            {this.props.children}
        </RecipeContext.Provider>
    )
  }
}

const RecipeConsumer = RecipeContext.Consumer;

export { RecipeProvider, RecipeConsumer, RecipeContext }
