'use client';

export default function IngredientsList({ ingredients }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>{ingredient.original}</li>
      ))}
    </ul>
  );
}
