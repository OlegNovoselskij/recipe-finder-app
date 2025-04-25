import Link from 'next/link';
import Image from 'next/image';

export default function RecipesList({ recipes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          href={`/recipes/${recipe.id}`}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
        >
          <div className="relative w-full h-48">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {recipe.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
