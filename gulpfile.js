var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    gulp.src('./src/AppBundle/Ressources/public/sass/master.scss')
        .pipe(sass({sourceComments: 'map', errLogToConsole: true}))
        .pipe(gulp.dest('./web/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/AppBundle/Ressources/public/sass/*.scss', ['sass']);
});