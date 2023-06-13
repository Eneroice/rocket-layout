import gulp from 'gulp';
import views from './views.task.js';
import styles from './styles.task.js';
import scripts from './scripts.task.js';
import config from './config.js';

const watcher = () => {
  gulp.watch([
    `${config.src.views}/**/*.html`,
    `${config.src.root}/index.html`,
  ], views);
  gulp.watch([
    `${config.src.styles}/**/*.scss`,
    `${config.src.root}/blocks/**/*.scss`,
  ], styles);
  gulp.watch([
    `${config.src.scripts}/**/*.js`,
    `${config.src.root}/blocks/**/*.js`,
  ], scripts);
};

export default watcher;
