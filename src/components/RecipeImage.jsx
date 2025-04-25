'use client';
import Image from 'next/image';

export default function RecipeImage({ src, alt }) {
  return (
    <div className="relative rounded-2xl shadow-lg overflow-hidden w-full max-w-md">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
