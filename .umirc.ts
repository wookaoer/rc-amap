import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-amap',
  mode: 'site',
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/guide': [
      {
        title: '快速上手',
        children: [
          // 菜单子项（可选）
         'guide/install'
        ],
      },
      {
        title: '使用',
        children: [
          // 菜单子项（可选）
          'guide/basicUse'
        ],
      },
    ]
  },
  // more config: https://d.umijs.org/config
});
