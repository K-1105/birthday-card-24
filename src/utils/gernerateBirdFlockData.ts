/**
 * Generates bird data with sequential IDs and default properties.
 *
 * @param {number} startId - The starting ID for the bird data.
 * @param {number} count - The number of birds to generate.
 * @param {Partial<{ reverseFly: boolean }>} defaultData - Default properties to apply to all birds.
 *
 * @returns {Record<number, Partial<{ reverseFly: boolean }>>} A record of bird data.
 */
export function generateBirdFlockData(
    startId: number,
    count: number,
    defaultData: Partial<{ reverseFly: boolean }> = {}
  ) {
    const birdFlockData: Record<number, Partial<{ reverseFly: boolean }>> = {};
  
    for (let i = startId; i < startId + count; i++) {
      birdFlockData[i] = { ...defaultData };
    }
  
    return birdFlockData;
  }