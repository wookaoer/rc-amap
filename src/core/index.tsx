import React, {FC} from 'react';
import Map from "@/core/Map";
import useMap from "@/hooks/useMap";

import {MapProps} from "@/types/map";

const [MapProvider] = useMap;

const Index: FC<MapProps> = props => {
  const {mapKey, version, plugins, children, ...mapProps} = props;
  return (
    <MapProvider {...props}>
      <Map {...mapProps}>
        {children}
      </Map>
    </MapProvider>
  )
}

export default Index
