export interface LocationInfo {
  name: string;
  url: string;
}
export const GENDERS = ['Male', 'Female', 'Genderless', 'Unknown'] as const;

export type Gender = (typeof GENDERS)[number];

export const CHARACTER_STATUS = ['Alive', 'Dead', 'Unknown'] as const;

export type CharacterStatus = (typeof CHARACTER_STATUS)[number];

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: Gender;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string; // You can also use Date type if you intend to manipulate the date, but would need to convert it
}
