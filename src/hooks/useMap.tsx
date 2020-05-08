import React, {useEffect, useState} from "react";
import constate from "constate";
import {load} from "@/utils/loader";

import "@amap/amap-jsapi-types";
import {MapProps} from "@/types/map";

function useMap(props: MapProps) {
  const {mapKey, version, plugins} = props;
  const [map, setMap] = useState<AMap.Map | null>(null);
  const [AMap, setAMap] = useState<any>(null);

  useEffect( () => {
    load({
      key: mapKey,
      version,
      plugins
    }).then((AMap) => {
      setAMap(AMap)
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return {AMap, map, setMap}
}

export default constate(useMap)
