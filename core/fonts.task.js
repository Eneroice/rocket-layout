import fs from 'fs';
import gulp from 'gulp';
import ttf2woff2 from 'gulp-ttf2woff2';
import ttfMeta from 'ttfmeta';
import config from './config.js';

const fonts = () => {
  return gulp.src(`${config.src.fonts}/**/*.ttf`)
      .pipe(ttf2woff2())
      .pipe(gulp.dest(config.res.fonts));
};

const fontsAdd = async () => {
  return fs.readdir(`${config.res.fonts}`, (err, files) => {
    fs.writeFile(
        `${config.src.styles}/_fonts.scss`,
        '',
        function(err) {
          if (err) throw err;
        });
    files.forEach((file) => {
      const fileName = file.replace('woff2', 'ttf');
      const fontFamily = file.split('-')[0];
      let weight = null;
      ttfMeta.promise(`${config.src.fonts}/${fileName}`)
          .then(
              (result) => {
                weight = result.tables.os2.weightClass;
                fs.appendFile(
                    `${config.src.styles}/_fonts.scss`,
                    // eslint-disable-next-line max-len
                    `@include font-face($name: '${fontFamily}', $path: '../fonts/${file}', $weight: ${weight});\n`,
                    function(err) {
                      if (err) throw err;
                    });
              })
          .catch(
              (err) => console.log('error', err),
          );
    });
  });
};

export default gulp.series(fonts, fontsAdd);
