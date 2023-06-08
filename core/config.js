const source = 'app';
const result = 'dist';

const config = {
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
