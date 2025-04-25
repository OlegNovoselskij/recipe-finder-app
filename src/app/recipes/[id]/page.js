'use client';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import RecipeDetailsContent from '@/components/RecipeDetailsContent';

export default function RecipeDetailsPage() {
  const { id } = useParams();

  if (!id) return <p>Invalid recipe ID</p>;

  return (
    <Suspense fallback={<p className="text-center">Loading recipe...</p>}>
      <RecipeDetailsContent id={id} />
    </Suspense>
  );
}
