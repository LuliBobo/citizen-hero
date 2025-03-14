/**
 * Safely replaces all occurrences of a search string with a replacement string
 * @param str The input string to perform replacements on
 * @param search The string to search for
 * @param replacement The string to replace matches with
 * @returns The string with all replacements made
 * @throws Error if any parameter is not a string
 */
export const safeReplace = (str: string, search: string, replacement: string): string => {
    if (typeof str !== 'string' || typeof search !== 'string' || typeof replacement !== 'string') {
        throw new Error('Invalid input: all parameters must be strings');
    }
    
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return str.replace(new RegExp(escapedSearch, 'g'), replacement);
};