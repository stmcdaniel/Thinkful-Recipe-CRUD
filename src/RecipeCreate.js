import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form 
  // TODO: Add the required submit and change handlers
  
  //state variable for when new type of content is created
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngred] = useState('');
  const [preparation, setPrep] = useState('');
  
//   console.log(name, cuisine, photo, ingredients, preparation);
  //To update the state variable when user changes content
  const nameChange = (e) => {
    setName(e.target.value);
  };
  
  const cuisineChange = (e) => {
    setCuisine(e.target.value);
  };
  
  const photoChange = (e) => {
    setPhoto(e.target.value);
  };
  
  const ingredChange = (e) => {
    setIngred(e.target.value);
  };
  
  const prepChange = (e) => {
    setPrep(e.target.value);
  };
  
  //to be called when user submits the form to create new recipe
  const handleSubmit = (e) => {
    e.preventDefault();
//     console.log('Submitted:',name, cuisine, photo, ingredients, preparation);
  
  const newRecipe= {
    name:name,
    cuisine: cuisine,
    photo: photo,
    ingredients: ingredients,
    preparation: preparation,
  };
    createRecipe(newRecipe);
  //clear form inputs
    setName('');
    setCuisine('');
    setPhoto('');
    setIngred('');
    setPrep('');
};
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
                <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={nameChange}
                value={name} />              
            </td>
            <td>
                <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={cuisineChange}
                value={cuisine} />
            </td>
            <td>
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  onChange={photoChange}
                  value={photo}
                />
            </td>
            <td>
                <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                onChange={ingredChange}
                value={ingredients} />
            </td>
            <td>
                <textarea
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                onChange={prepChange}
                value={preparation} />
                  </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;