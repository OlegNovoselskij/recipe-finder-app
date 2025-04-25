'use client';

export default function Section({ title, children }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {children}
    </section>
  );
}
