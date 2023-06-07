import gulp from 'gulp';
import clean from './core/clean.task.js';

export const development = gulp.series(
    clean,
);
