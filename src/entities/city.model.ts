import { ReferenceWithType } from '@spcy/lib.core.reflection';
import { Country } from './country.model';
import { Region } from './region.model';

export interface City {
  name: string;
  region?: ReferenceWithType<Region>;
  country?: ReferenceWithType<Country>;
}
