import gulp from 'gulp';
import gulpIf from 'gulp-if';
import gulpReplace from 'gulp-replace';
import gulpHtmlExtender from 'gulp-html-extend';
import gulpPrettyHtml from '@ntnyq/gulp-prettyhtml';
import gulpDebug from 'gulp-debug';
import config from './config.js';

const views = () => {
  return gulp.src([
    `${config.src.views}/**/*.html`,
    `!${config.src.views}/**/_*.html`,
    `${config.src.root}/index.html`,
  ])
      .pipe(gulpIf(config.isProd, gulpReplace('.css', '.min.css')))
      .pipe(gulpIf(config.isProd, gulpReplace('.js', '.min.js')))
      .pipe(gulpHtmlExtender({annotations: true}))
      .pipe(gulpPrettyHtml())
      .pipe(gulpIf(config.debugMode, gulpDebug({title: '[RL Debug] Views:'})))
      .pipe(gulp.dest(config.res.views));
};

export default views;
