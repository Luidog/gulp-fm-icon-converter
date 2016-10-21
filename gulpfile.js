'use strict'

const gulp = require('gulp'),
	  cheerio = require('gulp-cheerio'),
	  settings = require('./configuration/settings'),
	  shapeTypes = settings.shapeTypes;

function fixElement(icon) {
	for (var i = shapeTypes.length - 1; i >= 0; i--) {
		var shape = shapeTypes[i];
		var element = icon(shape);
		
		element.attribs = {};
    	element.addClass('fm_fill').attr('fill','#ccc');
	}
}

gulp.task('add-fm-class', function(){
	console.log(settings.standardIconsFolder + '/*.svg');
	return gulp
			.src(settings.standardIconsFolder + '/*.svg')
			.pipe(cheerio({
				run: function (icon){
					 	fixElement(icon);
				}
			}))
			.pipe(gulp.dest(settings.fmIconsFolder + "/"));
});

gulp.task('watch', function(){
	console.log("watching " + settings.standardIconsFolder + " for Icons." );
	gulp.watch(settings.standardIconsFolder + '/*.svg', ['add-fm-class']);	
})

gulp.task('default', ['add-fm-class', 'watch']);