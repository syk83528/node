/**
 * Created by syk on 17/6/14.
 */
var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('less',function () {
   gulp.src('./less/*.less',{base:'./css'})
       .pipe(less())
       .pipe(gulp.dest('./css'));
});