import browserSync from 'browser-sync';
import config from './config.js';

const server = (cb) => {
  browserSync.create().init({
    server: {
      baseDir: config.res.root,
    },
    files: [
      `${config.res.views}/*.html`,
      `${config.res.styles}/*.css`,
      `${config.res.scripts}/*.js`,
      {
        match: `${config.res.images}`,
        fn() {
          this.reload;
        },
      },
      {
        match: `${config.res.fonts}`,
        fn() {
          this.reload;
        },
      },
    ],
  });
  cb();
};

export default server;
