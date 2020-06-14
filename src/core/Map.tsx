import useMap from '../hooks/useMap';
import React, { FC, useEffect, useRef } from 'react';
import classNames from 'classnames';
import mapStyle from './map.less';
import { MapinitProps } from '@/types/map';

const [, useMapContext] = useMap;

const Map: FC<MapinitProps> = props => {
  const { wrapperClassName, containerClassName, events, ...mapOptions } = props;
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { AMap, map, setMap } = useMapContext();

  useEffect(() => {
    if (AMap && !map) {
      // @ts-ignore
      setMap(new AMap.Map(mapRef.current, mapOptions));
    }
  }, [AMap]);

  return (
    <div className={classNames(mapStyle['map-wrapper'], wrapperClassName)}>
      <div
        className={classNames(mapStyle['map-container'], containerClassName)}
        ref={mapRef}
      />
      {map && props.children}
    </div>
  );
};

export default Map;
