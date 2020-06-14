import { useEffect, useState } from 'react';
import useMap from '../hooks/useMap';
import _ from 'lodash';

const [, useMapContext] = useMap;

function usePlugins(plugins: string[] | string = []) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { AMap } = useMapContext();
  const pluginList = _.isString(plugins) ? [plugins] : plugins;

  useEffect(() => {
    if (AMap) {
      // @ts-ignore
      AMap.plugin(pluginList, () => {
        setLoaded(true);
      });
    }
  }, [AMap]);

  return {
    loaded,
  };
}

export default usePlugins;
