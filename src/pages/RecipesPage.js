import React, { Component } from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RecipeContext} from '../context';
import StyledHero from '../components/StyledHero'

export default class Recipes extends Component {
  constructor(props){
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    }
  }

  static contextType = RecipeContext;

  render() {
    const {getRecipe} = this.context;
    const recipe = getRecipe(this.state.slug);

    if(!recipe){
      return (
      <div className="error">
        <h3>no such recipe could be found...</h3>
        <Link to="/recipes" className="btn-primary">
          Back to Recipes Page
        </Link>
      </div>
      );  
    }
    const {name, author, preparation, ingredients, images} = recipe;

    return (
      <div className="condiv">
      <>
      <StyledHero img={images}>
        <Banner title={`${name}`}>
          <p>Author: {author}</p>
          <Link to="/recipes" className="btn-primary">
            Back to Recipes Page
          </Link>
        </Banner>
      </StyledHero>
      <section className="recipe-details">
        <div className="recipe-details-info">
          <article className="prep">
            <h3>preparation</h3>
            <p>{preparation}</p>
          </article>
          <article className="info">
            <h3>ingredients</h3>
            <ul className="ingredients">
            {ingredients.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
            </ul>
          </article>
         </div>
      </section>
      </>
      </div>
    )
  }
}
