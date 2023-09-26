import gulp from 'gulp';
import gulpChanged from 'gulp-changed';
import gulpIf from 'gulp-if';
import gulpImagemin, {mozjpeg, svgo} from 'gulp-imagemin';
import webp from 'imagemin-webp';
import pngquant from 'imagemin-pngquant';
import gulpRename from 'gulp-rename';
import gulpDebug from 'gulp-debug';
import gulpFavicons from 'gulp-favicons';
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
  return gulp.src([
    `${config.src.images}/**/*.{jpg,jpeg,png}`,
    `!${config.src.images}/favicon.png`,
  ])
      .pipe(gulpChanged(dest, {extension: '.webp'}))
      .pipe(gulpIf(config.isProd, gulpImagemin([
        webp({quality: 75}),
      ])))
      .pipe(gulpRename({extname: '.webp'}))
      .pipe(gulpIf(config.debugMode, gulpDebug({title: '[RL Debug] Images (JPG, JPEG, PNG):'})))
      .pipe(gulp.dest(dest));
};

const faviconGen = () => {
  return gulp.src(`${config.src.images}/favicon.png`)
      .pipe(
          gulpFavicons({
            appName: config.manifest.appName,
            appShortName: config.manifest.appShortName,
            appDescription: config.manifest.appDescription,
            developerName: config.manifest.developerName,
            developerURL: config.manifest.developerURL,
            background: config.manifest.backgroundColor,
            theme_color: config.manifest.themeColor,
            lang: config.manifest.language,
            path: '',
            url: config.manifest.appURL,
            display: config.manifest.display,
            orientation: config.manifest.orientation,
            scope: '/',
            start_url: '/',
            version: config.manifest.version,
          }),
      )
      .pipe(gulp.dest(`${dest}/favicons`));
};

export default gulp.series(images, webpConvert, faviconGen);
