'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { buildUrl } from '@/utils/buildUrl';

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [time, setTime] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Boolean(query || cuisine || time));
  }, [query, cuisine, time]);

  const handleSubmit = () => {
    const url = buildUrl({
      query,
      cuisine,
      maxReadyTime: time,
      apiKey: process.env.API_KEY,
    });

    router.push(`/recipes?${url.split('?')[1]}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Recipe Finder
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search for a recipe pizza, burger, etc."
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">Select Cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
          </select>
          <input
            type="number"
            placeholder="Max preparation time (minutes)"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-700"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            min="1"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`w-full p-4 rounded-lg text-white font-semibold transition duration-200 ease-in-out ${
            isValid
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </main>
  );
}
