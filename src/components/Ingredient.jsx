const Ingredient = ({ ingredient, onAdd, onRemove, isInStack }) => {
  const handleClick = () => {
    if (isInStack) {
      onRemove(ingredient);
    } else {
      onAdd(ingredient); 
    }
  };

  return (
    <div className="ingredient">
      <span>{ingredient.name}</span>
      <button onClick={handleClick}>
        {isInStack ? 'Remove' : 'Add'}
      </button>
    </div>
  );
};

export default Ingredient;
