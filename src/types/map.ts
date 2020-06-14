import '@amap/amap-jsapi-types';

export interface MapinitProps extends Partial<AMap.MapOptions> {
  wrapperClassName?: string;
  containerClassName?: string;
  events?: {
    [key in string]: () => void;
  };
}

export interface MapProps extends MapinitProps {
  mapKey: string;
  version?: string;
  plugins?: string[];
}

export interface MapInitOptions {
  key: string;
  version?: string;
  plugins?: string[];
}
