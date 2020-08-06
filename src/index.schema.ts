/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import { IndexModule as EntitiesIndexSchemaModule, Types as EntitiesIndexSchemaTypes } from './entities/index.schema';

export const IndexModule: r.Module = {
  $id: 'lib.standard.geo',
  $defs: {
    ...EntitiesIndexSchemaModule.$defs
  }
};

export const Types = {
  ...EntitiesIndexSchemaTypes
};
