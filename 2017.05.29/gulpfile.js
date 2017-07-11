/**
 * Created by syk on 17/6/8.
 */
//使用gulp必须先有npm,即基于node环境下全局安装npm install -g gulp

//使用插件必须先在当前目录下安装npm install gulp
var gulp = require('gulp');
//使用插件必须先在当前目录下安装npm install gulp-less
var less = require('gulp-less');
//使用插件必须先在当前目录下安装npm install gulp-imagemin
var imgMin = require('gulp-imagemin');

var cssmin = require('gulp-cssmin');
//less转成css
var htmlmin = require('gulp-htmlmin');

var autoprefixer = require('gulp-autoprefixer');

//这里'less' 是指方法名
gulp.task('less',function () {
    gulp.src('./less/*.less')//*正则匹配所有
        .pipe(less())//转化成css
        .pipe(cssmin())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./release'));//选择目标路径
});

//自动补全前缀
gulp.task('autoprefixer',function () {
    gulp.src('./js/*.js')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./release/js'));
});

gulp.task('imagemin',function () {
    gulp.src('./images/*')
        .pipe(imgMin())
        .pipe(gulp.dest('./release/images'));

});

gulp.task('html',function () {
   gulp.src('./*.html')
       .pipe(htmlmin({collapseWhitespace: true}))
       .pipe(gulp.dest('./release/html'));
});


