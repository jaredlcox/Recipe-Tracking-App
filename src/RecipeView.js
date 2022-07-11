import React from "react";

function RecipeView({ recipe, deleteRecipe }) {

    return (
        <tr className="row">
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}></img></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button type="submit" name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    );
}

export default RecipeView