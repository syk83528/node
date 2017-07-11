/**
 * Created by syk on 17/6/12.
 */
var gulp = require('gulp');

var rev = require('gulp-rev');

var revCollector = require('gulp-rev-collector');

var reName = require('gulp-rename');

gulp.task('js',function () {
   gulp.src('./rev/*.js')
       .pipe(rev())
       .pipe(gulp.dest('./rev'))
       .pipe(rev.manifest())
       .pipe(gulp.dest('./rev'));

});

gulp.task('rev',function () {
    gulp.src(['./rev/b/*.json','./index.html'],{base:'./rev'})
        .pipe(revCollector())
        .pipe(gulp.dest('./rev/release'));
});