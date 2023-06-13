import gulp from 'gulp';
import config from './config.js';

const styles = () => {
  return gulp.src(`${config.src.styles}/main.scss`)
      .pipe();
};

export default styles;
