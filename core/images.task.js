import gulp from 'gulp';
import gulpChanged from 'gulp-changed';
import gulpIf from 'gulp-if';
import gulpImagemin, {mozjpeg, svgo} from 'gulp-imagemin';
import webp from 'imagemin-webp';
import pngquant from 'imagemin-pngquant';
import gulpRename from 'gulp-rename';
import gulpDebug from 'gulp-debug';
import config from './config.js';

const dest = config.res.images;

const images = () => {
  return gulp.src(`${config.src.images}/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}`)
      .pipe(gulpChanged(dest))
      .pipe(gulpIf(config.isProd, gulpImagemin([
        mozjpeg({progressive: true, quality: 90}),
        svgo({
          plugins: [
            {removeViewBox: false},
            {removeUnusedNS: false},
            {removeUselessStrokeAndFill: false},
            {cleanupIDs: false},
            {removeComments: true},
            {removeEmptyAttrs: true},
            {removeEmptyText: true},
            {collapseGroups: true},
          ],
        }),
        pngquant({quality: [.75, .9]}),
      ], {verbose: true})))
      .pipe(gulpIf(config.debugMode, gulpDebug({title: '[RL Debug] Images (GIF, TIFF, SVG, WEBP):'})))
      .pipe(gulp.dest(dest));
};

const webpConvert = () => {
  return gulp.src(`${config.src.images}/**/*.{jpg,jpeg,png}`)
      .pipe(gulpChanged(dest, {extension: '.webp'}))
      .pipe(gulpIf(config.isProd, gulpImagemin([
        webp({quality: 75}),
      ])))
      .pipe(gulpRename({extname: '.webp'}))
      .pipe(gulpIf(config.debugMode, gulpDebug({title: '[RL Debug] Images (JPG, JPEG, PNG):'})))
      .pipe(gulp.dest(dest));
};

export default gulp.series(images, webpConvert);
