/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './country.model';

const CountryType: r.TypeInfo = {
  $id: 'Country',
  $package: 'lib.standard.geo',
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string'
    }
  }
};

const Country: r.Prototype<m.Country> = {
  ref: { $ref: CountryType.$id!, $refPackage: CountryType.$package! },
  typeInfo: CountryType
};

export const CountryModule: r.Module = {
  $id: 'lib.standard.geo',
  $defs: {
    Country: CountryType
  }
};

export const Types = {
  Country
};
