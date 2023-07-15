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
    try {
      files.forEach((file) => {
        const fileName = file.replace('woff2', 'ttf');
        ttfMeta.promise(`${config.src.fonts}/${fileName}`)
            .then(
                (result) => {
                  const fontFamily = result.meta.property[0].text.replace(/\0/g, '').split(' ')[0];
                  const fontWeight = result.tables.os2.weightClass;
                  const fontStyle = (result.tables.post.italicAngle < 0 ? 'italic' : 'normal');
                  fs.appendFile(
                      `${config.src.styles}/_fonts.scss`,
                      // eslint-disable-next-line max-len
                      `@include font-face($weight: ${fontWeight}, $name: '${fontFamily}', $style: ${fontStyle}, $path: '../fonts/${file}');\n`,
                      function(err) {
                        if (err) throw err;
                      });
                })
            .catch(
                (err) => console.log('error', err),
            );
      });
    } catch {
      console.log('Fonts not added. Font folder is empty...');
    }
  });
};

export default gulp.series(fonts, fontsAdd);
