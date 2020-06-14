import React, { FC, useEffect } from 'react';
import Map from './Map';
import useMap from '../hooks/useMap';

import { MapProps } from '@/types/map';

const [MapProvider, useMapContext] = useMap;

const Index: FC<MapProps> = props => {
  const { mapKey, version, plugins, children, ...mapProps } = props;

  return (
    <MapProvider {...props}>
      <Map {...mapProps}>{children}</Map>
    </MapProvider>
  );
};

export default Index;
