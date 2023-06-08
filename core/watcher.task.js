import gulp from 'gulp';
import views from './views.task.js';
import scripts from './scripts.task.js';
import config from './config.js';

const watcher = () => {
  gulp.watch(`${config.src.scripts}/**/*.js`, scripts);
  gulp.watch([
    `${config.src.views}/**/*.html`,
    `${config.src.root}/index.html`,
  ], views);
};

export default watcher;
