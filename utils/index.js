export function urlFor(source) {
  // If the source is already a string (like our mock data URLs), just return it.
  if (typeof source === 'string') return source;
  // Fallback if needed
  return source?.asset?.url || source;
}