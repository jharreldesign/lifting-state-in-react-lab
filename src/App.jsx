import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addIngredient = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };

  const removeIngredient = (ingredient) => {
    setStack((prevStack) => prevStack.filter(item => item.name !== ingredient.name));
  };

  return (
    <main>
<h1 className="inline">BURGER STACKER <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faaah0mnbncqtinas.public.blob.vercel-storage.com%2FHjRy4dHOWS-no-background-IWinW9QbmaASt9c33QOpsFdhzL1j9s.png&f=1&nofb=1&ipt=99fa0039e689b386223b43926de6c326d0a4325f2518ab36d0326dd43888463c&ipo=images" alt="Burger" /></h1>
      <div className="tables-container">
        <section className="ingredient-section">
          <h2>Available Ingredients</h2>
          <IngredientList ingredients={availableIngredients} addIngredient={addIngredient} />
        </section>

        <section className="burger-stack-section">
          <h2>Your Burger Stack</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stack.length === 0 ? (
                <tr>
                  <td colSpan="2">No Ingredients</td>
                </tr>
              ) : (
                stack.map((ingredient, index) => (
                  <tr key={index}>
                    <td>{ingredient.name}</td>
                    <td>
                      <button className="remove-button" onClick={() => removeIngredient(ingredient)}>Remove</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
};

export default App;
