export function extractIDFromURL(url: string): number | null {
  try {
    const pathParts = url.split('/');
    // Assume the ID is the last part of the URL path
    const id = pathParts[pathParts.length - 1];

    // Try to convert the ID to a number
    const numID = parseInt(id, 10);

    // Check if the conversion was successful
    if (!isNaN(numID)) {
      return numID;
    } else {
      console.error('ID is not a number');
      return null;
    }
  } catch (e) {
    console.error('Invalid URL', e);
    return null;
  }
}
