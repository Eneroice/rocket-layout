import gulp from 'gulp';
import clean from './core/clean.task.js';
import server from './core/server.task.js';

export const development = gulp.series(
    clean, server,
);
