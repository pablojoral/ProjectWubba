import {ParsedEpisodeInfo, parseEpisodeString} from './parseEpisode';

describe('parseEpisodeString', () => {
  it('should parse a valid episode string', () => {
    const input = 'S02E03';
    const expected: ParsedEpisodeInfo = {season: 2, episode: 3};
    expect(parseEpisodeString(input)).toEqual(expected);
  });

  it('should handle lowercase format', () => {
    const input = 's01e04';
    const expected: ParsedEpisodeInfo = {season: 1, episode: 4};
    expect(parseEpisodeString(input)).toEqual(expected);
  });

  it('should handle different season and episode numbers', () => {
    const input = 'S10E20';
    const expected: ParsedEpisodeInfo = {season: 10, episode: 20};
    expect(parseEpisodeString(input)).toEqual(expected);
  });

  it('should throw an error for an invalid format', () => {
    const invalidInput = 'InvalidFormat';
    expect(() => parseEpisodeString(invalidInput)).toThrowError('Wrong Format');
  });
});
