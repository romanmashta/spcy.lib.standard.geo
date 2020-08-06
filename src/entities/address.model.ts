import { ReferenceWithType } from '@spcy/lib.core.reflection';
import { City } from './city.model';
import { Country } from './country.model';

export interface Address {
  country?: ReferenceWithType<Country>;
  city?: ReferenceWithType<City>;
  addressLine1?: string;
  addressLine2?: string;
  zip?: string;
}
