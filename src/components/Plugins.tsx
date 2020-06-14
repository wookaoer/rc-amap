import { FC, useEffect } from 'react';
import usePlugins from '@/hooks/usePlugins';

export interface PluginsProps {
  plugins: string[] | string;
  onLoaded?: () => void;
}

const Plugins: FC<PluginsProps> = ({ plugins, onLoaded }) => {
  const { loaded } = usePlugins(plugins);

  useEffect(() => {
    if (loaded) {
      onLoaded && onLoaded();
    }
  }, [loaded]);

  return null;
};

export default Plugins;
