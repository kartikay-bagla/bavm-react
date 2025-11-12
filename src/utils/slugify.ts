/**
 * Convert a person's name to a URL-safe slug
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-');       // Replace multiple hyphens with single hyphen
}

/**
 * Find a person by slug from the people array
 */
export function findPersonBySlug<T extends { name: string }>(
  people: T[],
  slug: string
): T | undefined {
  return people.find((person) => slugify(person.name) === slug);
}
