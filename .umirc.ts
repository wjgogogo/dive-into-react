import { defineConfig } from 'dumi';

const BASE_URL = '/dive-into-react/';
// more config: https://d.umijs.org/config
export default defineConfig({
  mode: 'site',
  title: '读懂 React',
  logo: `${BASE_URL}avatar.jpg`,
  favicon: `${BASE_URL}avatar.jpg`,
  base: BASE_URL,
  publicPath: BASE_URL,
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    { title: 'Github', path: 'https://github.com/wjgogogo/dive-into-react' },
  ],
});
