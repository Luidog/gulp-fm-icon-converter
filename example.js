'use strict';

const gulp = require('gulp');
const { convert } = require('./index.js');

const destination = 'fm-icons/';
const source = 'standard-icons/*.svg';

gulp.task('add-fm-class', () => {
  gulp
    .src(source)
    .pipe(convert())
    .pipe(gulp.dest(destination));
});

gulp.task('watch', () => gulp.watch(source, ['add-fm-class']));

gulp.task('default', ['add-fm-class', 'watch']);
