import { seedModule } from '@spcy/lib.core.reflection';
import { IndexModule } from './index.schema';
import { Seed as Countries } from './countries/seed';

const collections = { ...Countries.collections };

export const Seed = {
  ...seedModule(IndexModule),
  ...Countries,
  collections
};
