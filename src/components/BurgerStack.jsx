import Ingredient from './Ingredient';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div className="burger-stack">
      <h2>Your Burger Stack</h2>
      <div className="stack-container">
        {stack.length === 0 ? (
          <p>No Ingredients</p>
        ) : (
          stack.map((ingredient) => (
            <Ingredient key={ingredient.name} ingredient={ingredient} onRemove={onRemove} isInStack={true} />
          ))
        )}
      </div>
    </div>
  );
};

export default BurgerStack;
