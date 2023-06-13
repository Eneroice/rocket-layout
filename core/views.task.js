import gulp from 'gulp';
import gulpIf from 'gulp-if';
import gulpReplace from 'gulp-replace';
import config from './config.js';

const views = () => {
  return gulp.src([
    `${config.src.views}/**/*.html`,
    `${config.src.root}/index.html`,
  ])
      .pipe(gulpIf(config.isProd, gulpReplace('.css', '.min.css')))
      .pipe(gulpIf(config.isProd, gulpReplace('.js', '.min.js')))
      .pipe(gulp.dest(config.res.views));
};

export default views;
