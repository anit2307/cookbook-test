import React from 'react';
import {Link} from 'react-router-dom';

export default function RecipeItems({recipe}) {
    const {name, slug, author, images} = recipe;
    
  return (
    
    <article className="recipe">
        <div className="img-container">
            <img src={images} alt="recipe" />
            <div className="author-top">
                <h6>{author}</h6>
            </div>
            <Link to={`/recipes/${slug}`} className="btn-primary recipe-link">Details</Link>
        </div>
        <p className="recipe-info">{name}</p>
    </article>
    );
}

