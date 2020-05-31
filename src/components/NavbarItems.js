import React from 'react';
import {Link} from 'react-router-dom';

export default function RecipeItems({recipe}) {
    
    const {name, slug} = recipe;
  return (
    <li><Link to={`/recipes/${slug}`}>{name}</Link></li>
    );
    
}

