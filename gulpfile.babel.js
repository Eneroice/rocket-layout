import gulp from 'gulp';
import clean from './core/clean.task.js';
import server from './core/server.task.js';
import watcher from './core/watcher.task.js';
import views from './core/views.task.js';
import scripts from './core/scripts.task.js';
import config from './core/config.js';

config.setEnv();

export const main = gulp.series(
    clean,
    gulp.parallel(
        scripts,
        views,
    ),
    (config.isDev ? gulp.parallel(server) : []),
    (config.isDev ? gulp.parallel(watcher) : []),
);
