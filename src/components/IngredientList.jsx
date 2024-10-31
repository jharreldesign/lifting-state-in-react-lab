const IngredientList = ({ ingredients, addIngredient }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.name}>
              <td>{ingredient.name}</td>
              <td>
                <button onClick={() => addIngredient(ingredient)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default IngredientList;