import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  mode: 'site',
  title: '读懂 React',
  logo: '/avatar.jpg',
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    { title: 'Github', path: 'https://github.com/wjgogogo/dive-into-react' },
  ],
});
