/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './city.model';

const CityType: r.TypeInfo = {
  $id: 'City',
  $package: 'lib.standard.geo',
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      type: 'string'
    },
    country: {
      $ref: 'ReferenceWithType',
      $refPackage: 'lib.core.reflection',
      $arguments: [
        {
          $ref: 'Country',
          $refPackage: 'lib.standard.geo'
        }
      ],
      $refArguments: 'lib.standard.geo.Country'
    }
  }
};

const City: r.Prototype<m.City> = {
  ref: { $ref: CityType.$id!, $refPackage: CityType.$package! },
  typeInfo: CityType
};

export const CityModule: r.Module = {
  $id: 'lib.standard.geo',
  $defs: {
    City: CityType
  }
};

export const Types = {
  City
};
