/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './region.model';

const RegionType: r.TypeInfo = {
  $id: 'Region',
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

const Region: r.Prototype<m.Region> = {
  ref: { $ref: RegionType.$id!, $refPackage: RegionType.$package! },
  typeInfo: RegionType
};

export const RegionModule: r.Module = {
  $id: 'lib.standard.geo',
  $defs: {
    Region: RegionType
  }
};

export const Types = {
  Region
};
