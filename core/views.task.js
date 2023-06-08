import gulp from 'gulp';
import config from './config.js';

const views = () => {
  return gulp.src([
    `${config.src.views}/**/*.html`,
    `${config.src.root}/index.html`,
  ])
      .pipe(gulp.dest(config.res.views));
};

export default views;
