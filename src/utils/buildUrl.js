export function buildUrl({
  query = '',
  cuisine = '',
  maxReadyTime = '',
  apiKey,
}) {
  let url = `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${apiKey}`;
  if (query) url += `&query=${query}`;
  if (cuisine) url += `&cuisine=${cuisine}`;
  if (maxReadyTime) url += `&maxReadyTime=${maxReadyTime}`;
  return url;
}
