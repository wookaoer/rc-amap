import useMap from "@/hooks/useMap";
import React, {FC, useEffect, useRef} from 'react';

import mapStyle from './map.less';
import {MapinitProps} from "@/types/map";

const [, useMapContext] = useMap;

const Map: FC<MapinitProps> = props => {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const {AMap, map, setMap} = useMapContext();

  useEffect(() => {
    if (AMap && !map) {
      setMap(new AMap.Map(mapRef.current))
    }
  }, [AMap])

  return (
    <div className={mapStyle['map-wrapper']}>
      <div className={mapStyle['map-container']} ref={mapRef} />
      {map && props.children}
    </div>
  )

};

export default Map
