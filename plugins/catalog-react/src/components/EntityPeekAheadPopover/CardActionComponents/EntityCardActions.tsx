/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { entityRouteRef } from '../../../routes';
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { useRouteRef } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { Link } from '@backstage/core-components';

/**
 * Card actions that show for all entities
 *
 * @private
 */
export const EntityCardActions = ({ entity }: { entity: Entity }) => {
  const entityRoute = useRouteRef(entityRouteRef);

  return (
    <IconButton
      component={Link}
      aria-label="Show"
      title="Show details"
      to={entityRoute({
        name: entity.metadata.name,
        namespace: entity.metadata.namespace || 'default',
        kind: entity.kind.toLocaleLowerCase('en-US'),
      })}
    >
      <InfoIcon />
    </IconButton>
  );
};
