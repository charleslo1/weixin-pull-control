var gulp = require('gulp')
var eslint = require('gulp-eslint')
var webserver = require('gulp-webserver')

// task: default
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
})

// task: lint
gulp.task('lint', () => {
  gulp.src(['src/**.js','!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
})
