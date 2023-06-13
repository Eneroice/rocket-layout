import gulp from 'gulp';
import gulpIf from 'gulp-if';
import gulpReplace from 'gulp-replace';
import gulpHtmlExtender from 'gulp-html-extend';
import gulpPrettyHtml from '@ntnyq/gulp-prettyhtml';
import config from './config.js';

const views = () => {
  return gulp.src([
    `${config.src.views}/**/*.html`,
    `!${config.src.views}/**/_*.html`,
    `${config.src.root}/index.html`,
  ])
      .pipe(gulpIf(config.isProd, gulpReplace('.css', '.min.css')))
      .pipe(gulpIf(config.isProd, gulpReplace('.js', '.min.js')))
      .pipe(gulpHtmlExtender({annotations: false}))
      .pipe(gulpPrettyHtml())
      .pipe(gulp.dest(config.res.views));
};

export default views;
