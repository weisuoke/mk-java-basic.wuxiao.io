const config = {
  mode: 'site',
  title: '慕课网Java工程师',
  description: '学习笔记',
  publicPath: '/',
  base: '/',
  exportStatic: {},
  dynamicImport: {},
  theme: {
    '@primary-color': '#00A7D6',
  },
  navs: [
    null
  ]
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
