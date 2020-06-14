import React, { useEffect, useState } from 'react';
import constate from 'constate';

import '@amap/amap-jsapi-types';
import { MapProps } from '@/types/map';
import { useLoader } from '../hooks/useLoader';

function useMap(props: MapProps) {
  const { mapKey, version, plugins } = props;
  const [map, setMap] = useState<AMap.Map | null>(null);
  const { AMap } = useLoader({
    key: mapKey,
    version,
    plugins,
  });

  return {
    map,
    AMap,
    setMap,
  };
}

export default constate(useMap);
