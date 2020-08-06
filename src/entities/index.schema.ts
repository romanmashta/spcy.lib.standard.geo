/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import { AddressModule, Types as AddressTypes } from './address.schema';
import { CityModule, Types as CityTypes } from './city.schema';
import { CountryModule, Types as CountryTypes } from './country.schema';
import { RegionModule, Types as RegionTypes } from './region.schema';

export const IndexModule: r.Module = {
  $id: 'lib.standard.geo',
  $defs: {
    ...AddressModule.$defs,
    ...CityModule.$defs,
    ...CountryModule.$defs,
    ...RegionModule.$defs
  }
};

export const Types = {
  ...AddressTypes,
  ...CityTypes,
  ...CountryTypes,
  ...RegionTypes
};
