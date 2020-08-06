import { ReferenceWithType } from '@spcy/lib.core.reflection';
import { Country } from './country.model';

export interface Region {
  name: string;
  country?: ReferenceWithType<Country>;
}
