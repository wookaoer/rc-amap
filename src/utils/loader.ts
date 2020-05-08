import AMapLoader from '@amap/amap-jsapi-loader';
import {MapInitOptions} from "@/types/map";

export const load = (options: MapInitOptions, callback?: any) => {
  return AMapLoader.load({
    ...options,
    version: options.version || '2.0',
    plugins: options.plugins || []
  })
}
