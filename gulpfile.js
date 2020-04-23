'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      plumber = require('gulp-plumber'),
      sourcemaps = require('gulp-sourcemaps'), //①「gulp-sourcemaps」を読み込み
      browserSync = require('browser-sync').create(),
      pug = require('gulp-pug');

// sass
gulp.task('sass', () => {
  gulp.watch(['./src/scss/**/*scss','./src/scss/**/**/*.scss'], () => {
  // scssファイルからcssファイルを書き出し
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init()) ///②「gulp.src」の直後に指定
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./')) //③「gulp.dest」の直前に指定
    .pipe(gulp.dest('./dist/asset/css/'));
  });
});

//autoprefixer
gulp.task('autoprefixer', () => {
  return gulp.src('./dist/asset/css/style.css')
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 4 versions', 'ie >= 11', 'iOS >= 8' , 'Android >= 4'],
        cascade: false
      })
    ]))
  .pipe(gulp.dest('./dist/asset/css/'));
});

//pug
gulp.task('pug', () => {
  return gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
  .pipe(pug({
    pretty: true,
    basedir: './dist/'
  }))
  .pipe(gulp.dest('./dist/'));
});

//ファイルに変更があったらする処理諸々
gulp.task('watch', () => {
  // scssファイルが変更されたらsassタスクを実行
  gulp.watch('./src/scss/**/*.scss', gulp.task('sass'));
  gulp.watch('./src/scss/**/*.scss', gulp.task('autoprefixer'));
  // pugファイルが変更されたらpugタスクを実行
  gulp.watch(['./src/pug/**/*.pug','./src/pug/**/*.html'], gulp.task('pug'));
  // phpファイルとcssファイルが変更されたら、ブラウザをリロード
  gulp.watch(['./dist/*.html', './dist/*.php', './dist/asset/css/*.css', './dist/asset/js/*.js']).on('change', browserSync.reload);
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
});
gulp.task('reload', function(){
    browserSync.reload();
});

//
// Default
//
gulp.task('default', gulp.series(gulp.parallel('server', 'watch'), function() {
}));