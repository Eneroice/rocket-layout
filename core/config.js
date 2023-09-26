const source = 'app';
const result = 'dist';

const config = {
  debugMode: false,
  manifest: {
    appName: 'RocketLayout',
    shortAppName: 'RL',
    // eslint-disable-next-line max-len
    appDescription: 'Rocket Layout is a simple Gulp build that solves many routine tasks when create web-site layouts',
    appURL: 'https://github.com/Eneroice/rocket-layout/',
    developerName: 'Eduardo Aslanyan',
    developerURL: 'https://github.com/Eneroice/',
    themeColor: '#FFF',
    backgroundColor: '#FFF',
    display: 'standalone',
    orientation: 'portrait',
    language: 'en-US',
    version: '1.0',
  },
  src: {
    root: source,
    views: `${source}/views`,
    styles: `${source}/styles`,
    scripts: `${source}/scripts`,
    images: `${source}/images`,
    fonts: `${source}/fonts`,
  },
  res: {
    root: result,
    views: `${result}`,
    styles: `${result}/css`,
    scripts: `${result}/js`,
    images: `${result}/img`,
    fonts: `${result}/fonts`,
  },
  setEnv() {
    this.isDev = process.argv.includes('--dev');
    this.isProd = process.argv.includes('--build');
  },
};

export default config;
