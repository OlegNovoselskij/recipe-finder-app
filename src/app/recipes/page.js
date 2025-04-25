import { buildUrl } from '@/utils/buildUrl';
import RecipesList from '@/components/RecipesList';

export default async function RecipesPage({ searchParams }) {
  const { query, cuisine, maxReadyTime } = (await searchParams) || {};

  const apiKey = process.env.API_KEY;
  const url = buildUrl({ query, cuisine, maxReadyTime, apiKey });

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Search Results
      </h1>

      <RecipesList recipes={data.results} />
    </main>
  );
}
