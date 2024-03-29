import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import gulpSourcemaps from 'gulp-sourcemaps';
import nodeSass from 'node-sass';
import gulpSass from 'gulp-sass';
import gcmq from 'gulp-group-css-media-queries';
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpCleanCss from 'gulp-clean-css';
import gulpRename from 'gulp-rename';
import gulpDebug from 'gulp-debug';
import config from './config.js';

const sass = gulpSass(nodeSass);

const styles = () => {
  return gulp.src(`${config.src.styles}/main.scss`)
      .pipe(gulpPlumber({
        errorHandler: function(err) {
          console.log(err);
          this.emit('end');
        }}))
      .pipe(gulpIf(config.isDev, gulpSourcemaps.init({loadMaps: true})))
      .pipe(sass())
      .pipe(gulpIf(config.isProd, gcmq()))
      .pipe(gulpIf(config.isProd, gulpAutoprefixer()))
      .pipe(gulpIf(config.isProd, gulpCleanCss({
        compatibility: 'ie8',
        level: 2,
      })))
      .pipe(gulpIf(config.isProd, gulpRename({suffix: '.min'})))
      .pipe(gulpIf(config.isDev, gulpSourcemaps.write()))
      .pipe(gulpIf(config.debugMode, gulpDebug({title: '[RL Debug] Styles:'})))
      .pipe(gulp.dest(config.res.styles));
};

export default styles;
