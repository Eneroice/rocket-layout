import gulp from 'gulp';
import browserify from 'browserify';
import vinylSourceStream from 'vinyl-source-stream';
import vinylBuffer from 'vinyl-buffer';
import gulpIf from 'gulp-if';
import gulpUglify from 'gulp-uglify';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpRename from 'gulp-rename';
import config from './config.js';

const scripts = () => (
  browserify(`${config.src.scripts}/main.js`, {debug: true})
      .transform('babelify', {presets: ['@babel/preset-env']})
      .bundle()
      .pipe(vinylSourceStream('main.js'))
      .pipe(gulpIf(config.isProd, gulpRename({suffix: '.min'})))
      .pipe(vinylBuffer())
      .pipe(gulpIf(config.isDev, gulpSourcemaps.init({loadMaps: true})))
      .pipe(gulpIf(config.isProd, gulpUglify()))
      .pipe(gulpIf(config.isDev, gulpSourcemaps.write()))
      .pipe(gulp.dest(config.res.scripts))
);

export default scripts;
