/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './address.model';

const AddressType: r.TypeInfo = {
  $id: 'Address',
  $package: 'lib.standard.geo',
  type: 'object',
  properties: {
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
    },
    city: {
      $ref: 'ReferenceWithType',
      $refPackage: 'lib.core.reflection',
      $arguments: [
        {
          $ref: 'City',
          $refPackage: 'lib.standard.geo'
        }
      ],
      $refArguments: 'lib.standard.geo.City'
    },
    addressLine1: {
      type: 'string'
    },
    addressLine2: {
      type: 'string'
    },
    zip: {
      type: 'string'
    }
  }
};

const Address: r.Prototype<m.Address> = {
  ref: { $ref: AddressType.$id!, $refPackage: AddressType.$package! },
  typeInfo: AddressType
};

export const AddressModule: r.Module = {
  $id: 'lib.standard.geo',
  $defs: {
    Address: AddressType
  }
};

export const Types = {
  Address
};
