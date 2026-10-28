export type Dictionary = { [key: string]: string | string[] | Dictionary };

const isDictionary = (value: unknown): value is Dictionary =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/** Recursively merges dictionaries; later sources win on conflicts. */
export function mergeDictionaries(...sources: Dictionary[]): Dictionary {
  const result: Dictionary = {};
  for (const source of sources) {
    for (const [key, value] of Object.entries(source)) {
      const existing = result[key];
      result[key] =
        isDictionary(value) && isDictionary(existing)
          ? mergeDictionaries(existing, value)
          : value;
    }
  }
  return result;
}
