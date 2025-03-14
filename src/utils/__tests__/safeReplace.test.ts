import { safeReplace } from '../safeReplace';

describe('safeReplace', () => {
    test('replaces basic strings', () => {
        expect(safeReplace('hello hello world', 'hello', 'hi')).toBe('hi hi world');
    });

    test('handles empty strings', () => {
        expect(safeReplace('', '', '')).toBe('');
        expect(safeReplace('test', '', '')).toBe('test');
        expect(safeReplace('test', 'test', '')).toBe('');
    });

    test('handles special regex characters', () => {
        expect(safeReplace('1.2.3', '.', '-')).toBe('1-2-3');
        expect(safeReplace('a*b+c', '*', '!')).toBe('a!b+c');
        expect(safeReplace('[test]', '[', '(')).toBe('(test]');
    });

    test('handles Unicode characters', () => {
        expect(safeReplace('hello 👋 world 👋', '👋', '✨')).toBe('hello ✨ world ✨');
    });

    test('throws on invalid input types', () => {
        expect(() => safeReplace(123 as any, 'test', 'replace')).toThrow('Invalid input');
        expect(() => safeReplace('test', null as any, 'replace')).toThrow('Invalid input');
        expect(() => safeReplace('test', 'search', undefined as any)).toThrow('Invalid input');
    });
});