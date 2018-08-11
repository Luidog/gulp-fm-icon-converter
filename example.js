'use strict';

const gulp = require('gulp');
const { convert, ensureDirectories, files } = require('./index.js');

const destination = 'fm-icons';
const source = 'standard-icons';

gulp.task('create-directories', ensureDirectories(source, destination));

gulp.task('convert-icons', () =>
  gulp
    .src(files(source))
    .pipe(convert())
    .pipe(gulp.dest(destination))
);

gulp.task('watch', () => gulp.watch(files(source), ['convert-icons']));

gulp.task('default', ['create-directories', 'watch']);
