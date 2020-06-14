---
title: Basic Use
---

# 基础使用

```jsx
import React, { useEffect } from 'react';
import ReactAMap from '../../src/index';
import usePlugins from '../../src/hooks/usePlugins';
import useMap from '../../src/hooks/useMap';

const [, useMapContext] = useMap;

const Plugin = props => {
  const { map } = useMapContext();
  const { loaded } = usePlugins('AMap.ToolBar');
  useEffect(() => {
    if (loaded) {
      const toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
    }
  }, [loaded]);

  return null;
};

export default () => {
  return (
    <div style={{ height: 300 }}>
      <ReactAMap mapKey="803dc6c074461b76d9e218e505b9dffb">
        <Plugin />
      </ReactAMap>
    </div>
  );
};
```
