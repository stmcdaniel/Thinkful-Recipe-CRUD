import React from "react";


function RecipeView({recipe, deleteRecipe}) {
  return (
    <tr>
      <td><p>{recipe.name}</p></td>
      <td><p>{recipe.cuisine}</p></td>
      <td><img src={recipe.photo || "http://www.nopicavailable.com"} alt={recipe.name} className="scale-down" />
      </td>
      <td className="content_id"><p>{recipe.ingredients}</p></td>
      <td className="content_id"><p>{recipe.preparation}</p></td>    
      <td>
        <button name="delete" onClick={deleteRecipe}>Delete</button>
      </td>
      </tr>
  )
}



export default RecipeView;