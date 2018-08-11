# Gulp FM Icon Converter

This tool is used to help convert svg icons into filemaker compatable svg icons. It various things such as fm_fill and a grey fill to enable use in filemaker.

## Getting Started

<!--@installation()-->
## Installation

```sh
npm install --save gulp gulp-fm-icon-converter
```
<!--/@-->

<!--@example('./example.js')-->
```js
'use strict';

const gulp = require('gulp');
const { convert, ensureDirectories, files } = require('gulp-fm-icon-converter');

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
```
<!--/@-->

## Authors

- **Lui de la Parra** - _Initial work_

See also the list of [contributors](https://github.com/Luidog/gulp-fm-icon-converter/graphs/contributors) who participated in this project.

<!--@dependencies()-->
## <a name="dependencies">Dependencies</a>

- [gulp-cheerio](https://github.com/KenPowers/gulp-cheerio): Manipulate HTML and XML files with Cheerio in Gulp.

<!--/@-->

<!--@license()-->
## License

MIT © Lui de la Parra
<!--/@-->

## Acknowledgments

- Hat tip to Matt Petrowski for his contributions to all things FM.
- Hat tip to Todd Geist for his hosting of this tool at fmsvg.com
