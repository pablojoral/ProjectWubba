export type ParsedEpisodeInfo = {
  season: number;
  episode: number;
};

/**
 * Parse a string in the format 'SxxEyy' into its corresponding season and episode numbers.
 *
 * @param str - The input string in the format 'SxxEyy'.
 * @returns An object with the parsed season and episode numbers.
 */
export function parseEpisodeString(str: string): ParsedEpisodeInfo {
  const regex = /^S(\d+)E(\d+)$/i; // Regular expression to match SxxEyy pattern
  const match = str.match(regex);

  if (match) {
    const season = parseInt(match[1], 10);
    const episode = parseInt(match[2], 10);
    return {season, episode};
  }
  throw new Error('Wrong Format');
}
