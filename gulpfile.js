var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    path = require('path');

var source_files = {
    less: './assets/less/*.less',
    jade: './assets/jade/**/*.jade'
};

var output_files = {
    css: './public/css',
    html: './public'
};


gulp.task('templates', function () {
    var locals = {};
    gulp.src(source_files.jade)
        .pipe(jade({
        locals: locals
    }))
    .pipe(gulp.dest(output_files.html))
});


gulp.task('less', function () {
  return gulp.src(source_files.less)
    .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(output_files.css));
});


gulp.watch(source_files.less, ['less'])
gulp.watch(source_files.jade, ['templates'])


gulp.task('default', ['less', 'templates']);
