import {extractIDFromURL} from './extractIdFromUrl';

describe('extractIDFromURL', () => {
  it('should extract and return a valid ID from a valid URL', () => {
    expect(extractIDFromURL('https://example.com/some/path/42')).toBe(42);
    expect(extractIDFromURL('https://example.com/another/123')).toBe(123);
  });

  it('should return null for an invalid URL', () => {
    expect(extractIDFromURL('not_a_url')).toBeNull();
    expect(extractIDFromURL('https://example.com/missing_id/')).toBeNull();
  });

  it('should return null for a URL with a non-numeric ID', () => {
    expect(
      extractIDFromURL('https://example.com/invalid/id/string'),
    ).toBeNull();
  });
});
