import { Seed as Ukraine } from './ukraine/seed';

const collections = { ...Ukraine.collections };

export const Seed = {
  ...Ukraine,
  collections
};
