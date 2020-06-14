import AMapLoader from '@amap/amap-jsapi-loader';
import { MapInitOptions } from '@/types/map';
import { useEffect, useState } from 'react';

export const useLoader = (options: MapInitOptions) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [AMap, setAMap] = useState(null);

  useEffect(() => {
    AMapLoader.load({
      ...options,
      version: options.version || '2.0',
      plugins: options.plugins || [],
    }).then(AMap => {
      setLoaded(true);
      setAMap(AMap);
    });
  }, []);

  return {
    loaded,
    AMap,
  };
};
