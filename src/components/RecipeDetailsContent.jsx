'use client';
import useSWR from 'swr';
import RecipeImage from './RecipeImage';
import IngredientsList from './IngredientsList';
import Section from './Section';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RecipeDetailsContent({ id }) {
  const { data: recipe, error } = useSWR(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
    fetcher,
    { suspense: true },
  );

  if (error) {
    return <p className="text-red-500">Failed to load recipe details</p>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-800 leading-tight">
          {recipe.title}
        </h1>

        <div className="flex justify-center mb-10">
          <RecipeImage src={recipe.image} alt={recipe.title} />
        </div>

        <div className="grid gap-8">
          <Section title="🧂 Ingredients">
            <IngredientsList ingredients={recipe.extendedIngredients} />
          </Section>

          <Section title="📋 Summary">
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Section title="⏱ Preparation Time">
              <p className="text-gray-700">{recipe.readyInMinutes} minutes</p>
            </Section>

            <Section title="🍽 Servings">
              <p className="text-gray-700">{recipe.servings} servings</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
